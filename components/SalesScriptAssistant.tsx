import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { scriptData } from '@/lib/scriptData';

const SalesScriptAssistant = () => {
  const [currentStep, setCurrentStep] = useState("INICIO");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredScripts, setFilteredScripts] = useState(scriptData);

  const step = scriptData[currentStep];

  useEffect(() => {
    const filtered = Object.entries(scriptData).reduce((acc, [key, value]) => {
      if (value.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          value.message.toLowerCase().includes(searchTerm.toLowerCase())) {
        acc[key] = value;
      }
      return acc;
    }, {});
    setFilteredScripts(filtered);
  }, [searchTerm]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Asistente de Scripts de Ventas</h1>
      
      <Input
        type="text"
        placeholder="Buscar scripts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      <Card className="mb-6">
        <CardHeader className="font-bold text-lg">{step.category}</CardHeader>
        <CardContent>
          <p className="mb-4 text-lg">{step.message}</p>
          <div className="flex flex-col space-y-3">
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
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        {Object.entries(filteredScripts).map(([key, value]) => (
          <Button
            key={key}
            onClick={() => setCurrentStep(key)}
            variant="secondary"
            className="text-left"
          >
            {value.category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SalesScriptAssistant;