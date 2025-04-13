'use client';

import type React from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { VariableConfig } from '@/types/variable-config';

interface PromptConfigFormProps {
  variables: VariableConfig[];
  setVariables: React.Dispatch<React.SetStateAction<VariableConfig[]>>;
}

export function PromptConfigForm({
  variables,
  setVariables,
}: PromptConfigFormProps) {
  const addVariable = (parentId: string | null = null) => {
    const newVariable: VariableConfig = {
      id: Date.now().toString(),
      name: '',
      desc: '',
      type: 'string',
      parentId,
      children: [],
    };

    if (parentId === null) {
      setVariables([...variables, newVariable]);
    } else {
      const updateVariables = (vars: VariableConfig[]): VariableConfig[] => {
        return vars.map((v) => {
          if (v.id === parentId) {
            return {
              ...v,
              children: [...v.children, newVariable],
            };
          } else if (v.children.length > 0) {
            return {
              ...v,
              children: updateVariables(v.children),
            };
          }
          return v;
        });
      };

      setVariables(updateVariables(variables));
    }
  };

  const removeVariable = (id: string) => {
    const removeFromArray = (vars: VariableConfig[]): VariableConfig[] => {
      return vars
        .filter((v) => v.id !== id)
        .map((v) => ({
          ...v,
          children: removeFromArray(v.children),
        }));
    };

    setVariables(removeFromArray(variables));
  };

  const updateVariable = (
    id: string,
    field: keyof VariableConfig,
    value: any
  ) => {
    const updateInArray = (vars: VariableConfig[]): VariableConfig[] => {
      return vars.map((v) => {
        if (v.id === id) {
          return { ...v, [field]: value };
        } else if (v.children.length > 0) {
          return {
            ...v,
            children: updateInArray(v.children),
          };
        }
        return v;
      });
    };

    setVariables(updateInArray(variables));
  };

  const renderVariableForm = (variable: VariableConfig, depth = 0) => {
    return (
      <div
        key={variable.id}
        className={`p-3 mb-3 border rounded-md ${
          depth > 0 ? 'ml-0 sm:ml-4 md:ml-6' : ''
        }`}
      >
        {/* Responsive form layout */}
        <div className="flex flex-col space-y-3 mb-3">
          {/* Form fields in a responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Name field */}
            <div className="space-y-1">
              <Label
                htmlFor={`name-${variable.id}`}
                className="text-sm font-medium"
              >
                Variable Name
              </Label>
              <Input
                id={`name-${variable.id}`}
                value={variable.name}
                onChange={(e) =>
                  updateVariable(variable.id, 'name', e.target.value)
                }
                placeholder="name"
                className="w-full"
              />
            </div>

            {/* Description field */}
            <div className="space-y-1">
              <Label
                htmlFor={`desc-${variable.id}`}
                className="text-sm font-medium"
              >
                Description
              </Label>
              <Input
                id={`desc-${variable.id}`}
                value={variable.desc}
                onChange={(e) =>
                  updateVariable(variable.id, 'desc', e.target.value)
                }
                placeholder="description"
                className="w-full"
              />
            </div>

            {/* Type field */}
            <div className="space-y-1">
              <Label
                htmlFor={`type-${variable.id}`}
                className="text-sm font-medium"
              >
                Type
              </Label>
              <Select
                value={variable.type}
                onValueChange={(value) =>
                  updateVariable(variable.id, 'type', value)
                }
              >
                <SelectTrigger id={`type-${variable.id}`} className="w-full">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="string">string</SelectItem>
                  <SelectItem value="StringArray">StringArray</SelectItem>
                  <SelectItem value="object">object</SelectItem>
                  <SelectItem value="array">array</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 justify-end">
          {(variable.type === 'object' || variable.type === 'array') && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => addVariable(variable.id)}
              className="flex items-center"
            >
              <PlusCircle className="h-4 w-4 mr-1" />
              <span className="whitespace-nowrap">Add Nested</span>
            </Button>
          )}
          <Button
            variant="destructive"
            size="sm"
            onClick={() => removeVariable(variable.id)}
            className="flex items-center"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            <span className="whitespace-nowrap">Remove</span>
          </Button>
        </div>

        {/* Nested variables */}
        {variable.children.length > 0 && (
          <div className="mt-3">
            {variable.children.map((child) =>
              renderVariableForm(child, depth + 1)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {variables.map((variable) => renderVariableForm(variable))}
      <Button onClick={() => addVariable()} className="w-full mt-3">
        <PlusCircle className="h-4 w-4 mr-2" />
        Add Variable
      </Button>
    </div>
  );
}
