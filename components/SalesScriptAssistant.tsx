import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clipboard } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { scriptData } from '../lib/scriptData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SalesScriptAssistant = () => {
  const [currentStep, setCurrentStep] = useState("INICIO");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredScripts, setFilteredScripts] = useState(scriptData);
  const [hasMounted, setHasMounted] = useState(false);
  const [seriesKeys, setSeriesKeys] = useState([]);

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

    const messages = Array.isArray(step.messages) ? step.messages : [step.messages];

    return (
      <div className="mb-4 p-3 bg-white rounded-lg shadow">
        <div className="flex flex-col space-y-3">
          {messages.map((message, index) => (
            <div key={index} className="p-3 bg-gray-100 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <ReactMarkdown className="text-lg prose">
                  {String(message)}
                </ReactMarkdown>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(String(message))}
                  aria-label="Copiar al portapapeles"
                  className="icon-hover-animation"
                >
                  <Clipboard className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex-1">
            {seriesKeys.indexOf(currentStep) > 0 && (
              <Button onClick={handlePreviousInSeries} className="float-left">Atrás</Button>
            )}
          </div>
          <div className="flex-1 text-right">
            {seriesKeys.indexOf(currentStep) < seriesKeys.length - 1 && (
              <Button onClick={handleNextInSeries} className="float-right">Siguiente</Button>
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
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
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