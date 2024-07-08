import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clipboard } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { scriptData } from '../lib/scriptData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SalesScriptAssistant = () => {
  const [currentStep, setCurrentStep] = useState("INICIO");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredScripts, setFilteredScripts] = useState(scriptData);
  const [hasMounted, setHasMounted] = useState(false);
  const [seriesKeys, setSeriesKeys] = useState([]);

  // New state to keep track of the current page in series
  const [currentSeriesPage, setCurrentSeriesPage] = useState(0);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const step = scriptData[currentStep];

  useEffect(() => {
    const filtered = Object.entries(scriptData).reduce((acc, [key, value]) => {
      if (value.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (Array.isArray(value.messages) ? value.messages.some(msg => msg.toLowerCase().includes(searchTerm.toLowerCase())) : value.messages.toLowerCase().includes(searchTerm.toLowerCase()))) {
        acc[key] = value;
      }
      return acc;
    }, {});
    setFilteredScripts(filtered);
  }, [searchTerm]);

  useEffect(() => {
    if (step.series) {
      const keys = Object.keys(scriptData).filter(key => scriptData[key].category === step.category && scriptData[key].series);
      setSeriesKeys(keys);
    } else {
      setSeriesKeys([]);
    }
  }, [currentStep]);

  const handleNextInSeries = () => {
    const nextStepIndex = seriesKeys.indexOf(currentStep) + 1;
    if (nextStepIndex < seriesKeys.length) {
      setCurrentStep(seriesKeys[nextStepIndex]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePreviousInSeries = () => {
    const prevStepIndex = seriesKeys.indexOf(currentStep) - 1;
    if (prevStepIndex >= 0) {
      setCurrentStep(seriesKeys[prevStepIndex]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (key) => {
    setCurrentStep(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Texto copiado al portapapeles!");
  };

  const renderMessages = () => {
    if (!step.series) {
      // Non-series rendering logic remains the same
      const categoryScripts = Object.values(scriptData).filter(script => script.category === step.category);
      return categoryScripts.map((script, index) => (
        <div key={index} className="mb-4 p-3 bg-white rounded-lg shadow">
          {index === 0 ? (
            <div className="flex justify-between items-start">
              <ReactMarkdown className="text-lg prose">
                {Array.isArray(script.messages) ? script.messages.join('\n\n') : String(script.messages)}
              </ReactMarkdown>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(Array.isArray(script.messages) ? script.messages.join('\n\n') : String(script.messages))}
                aria-label="Copiar al portapapeles"
                className="icon-hover-animation"
              >
                <Clipboard className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <div className="font-bold text-lg">{script.title}</div>
              <div className="flex justify-between items-start">
                <ReactMarkdown className="text-lg prose">
                  {Array.isArray(script.messages) ? script.messages.join('\n\n') : String(script.messages)}
                </ReactMarkdown>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(Array.isArray(script.messages) ? script.messages.join('\n\n') : String(script.messages))}
                  aria-label="Copiar al portapapeles"
                  className="icon-hover-animation"
                >
                  <Clipboard className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </div>
      ));
    }

    // Get all series steps for the current category
    const seriesSteps = Object.entries(scriptData)
      .filter(([key, value]) => value.category === step.category && value.series)
      .sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

    // Calculate the total number of pages
    const totalPages = Math.ceil(seriesSteps.length / 3);

    // Get the current subset of series steps to display
    const currentSeriesSteps = seriesSteps.slice(currentSeriesPage * 3, (currentSeriesPage + 1) * 3);

    return (
      <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentSeriesSteps.map(([key, script], index) => (
            <Card key={key} className="bg-white shadow">
              <CardHeader className="font-bold text-lg">
                {script.title}
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Array.isArray(script.messages) ? (
                    script.messages.map((message, msgIndex) => (
                      <div key={msgIndex} className="p-2 bg-gray-100 rounded">
                        <ReactMarkdown
                          className="text-sm prose max-w-none"
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-2" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal pl-4 mb-2" {...props} />,
                            li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                          }}
                        >
                          {message.replace(/^[-*]\s/gm, '- ')}
                        </ReactMarkdown>
                      </div>
                    ))
                  ) : (
                    <div className="p-2 bg-gray-100 rounded">
                      <ReactMarkdown
                        className="text-sm prose max-w-none"
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                          ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-2" {...props} />,
                          ol: ({ node, ...props }) => <ol className="list-decimal pl-4 mb-2" {...props} />,
                          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                        }}
                      >
                        {script.messages.replace(/^[-*]\s/gm, '- ')}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(Array.isArray(script.messages) ? script.messages.join('\n\n') : String(script.messages))}
                    aria-label="Copiar al portapapeles"
                    className="icon-hover-animation"
                  >
                    <Clipboard className="h-4 w-4" />
                  </Button>
                </div>
                {script.options && (
                  <div className="mt-4 space-y-2">
                    {script.options.map((option, optionIndex) => (
                      <Button
                        key={optionIndex}
                        onClick={() => setCurrentStep(option.next)}
                        variant="outline"
                        className="w-full"
                      >
                        {option.text}
                      </Button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation buttons for series */}
        <div className="flex justify-between mt-4">
          <div className="flex-1">
            {currentSeriesPage > 0 && (
              <Button onClick={() => setCurrentSeriesPage(prev => prev - 1)} className="float-left">
                Atrás
              </Button>
            )}
          </div>
          <div className="flex-1 text-right">
            {currentSeriesPage < totalPages - 1 && (
              <Button onClick={() => setCurrentSeriesPage(prev => prev + 1)} className="float-right">
                Siguiente
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderOptions = () => {
    if (step.options) {
      return (
        <div className="flex flex-col space-y-3 mt-4">
          {step.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => setCurrentStep(option.next)}
              variant="outline"
            >
              {option.text}
            </Button>
          ))}
        </div>
      );
    }
    return null;
  };

  const groupedScripts = Object.entries(filteredScripts).reduce((acc, [key, value]) => {
    if (!acc[value.category]) {
      acc[value.category] = [];
    }
    acc[value.category].push({ key, ...value });
    return acc;
  }, {});

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Asistente de Scripts de Ventas</h1>

      <Input
        type="text"
        placeholder="Buscar scripts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      <Card className="mb-6">
        <CardHeader className="font-bold text-lg flex items-center">
          {step.title}
          <Badge variant="secondary" className="ml-2 px-2.5 py-0.5 rounded-full text-xs font-semibold">
            {step.category}
          </Badge>
        </CardHeader>
        <CardContent>
          {renderMessages()}
          {renderOptions()}
        </CardContent>
      </Card>

      {/* Category Navigation */}
      <div className="grid grid-cols-1 gap-4">
        {Object.entries(groupedScripts).map(([category, scripts]) => (
          <Card key={category}>
            <CardHeader className="font-bold text-lg cursor-pointer" onClick={() => handleCategoryClick(scripts[0].key)}>
              {category}
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SalesScriptAssistant;