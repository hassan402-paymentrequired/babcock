/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

interface AssignTaskModalProps {
  open: boolean;
  onClose: any;
}

export function MakeComplaint({ open, onClose }: AssignTaskModalProps) {
  const { toast } = useToast();
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    assignee: "",
    priority: "",
    project: "",
    dueDate: "",
  });

  const complaintsType = [
    "Academic (e.g., grading, faculty behavior)",
    "Administrative (e.g., fees, documents)",
    "Harassment/Discrimination",
    "Facilities (e.g., hostel, library)",
    "Other (specify)",
  ];

  const projects = [
    "E-commerce Platform",
    "Mobile App Redesign",
    "Data Migration",
  ];

  const urgencyLevel = ["Low", "Medium", "High", "Critical"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Assigning task:", taskData);

    toast({
      title: "Task assigned successfully",
      description: `Task "${taskData.title}" has been assigned to ${taskData.assignee}.`,
    });

    onClose();
    // Reset form
    setTaskData({
      title: "",
      description: "",
      assignee: "",
      priority: "",
      project: "",
      dueDate: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent  className={"overflow-y-scroll max-h-screen sm:max-w-[600px]"}>
        <DialogHeader>
          <DialogTitle className="text-xl text-gray-800 dark:text-gray-200">
            Make Complaint
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300">
            Make a complaint about any issue you are facing in the hostel.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 md:col-span-2">
              <Label
                htmlFor="title"
                className="text-gray-800 dark:text-gray-300"
              >
                Title/Subject of Complaint (Short summary)
              </Label>
              <Input
                id="title"
                value={taskData.title}
                onChange={(e) =>
                  setTaskData((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Enter complain summary"
                required
                className="border-stone-800"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label
                htmlFor="description"
                className="text-gray-800 dark:text-gray-300"
              >
                Detailed Description (What happened? When? Where?)
              </Label>
              <Textarea
                id="description"
                value={taskData.description}
                onChange={(e) =>
                  setTaskData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Detailed Description"
                rows={4}
                className="border-stone-800"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="assignee"
                className="text-gray-800 dark:text-gray-300"
              >
                Type of complain
              </Label>
              <Select
                value={taskData.assignee}
                onValueChange={(value) =>
                  setTaskData((prev) => ({ ...prev, assignee: value }))
                }
                className="w-full"
              >
                <SelectTrigger className="border-stone-800">
                  <SelectValue placeholder="Select complaint type" />
                </SelectTrigger>
                <SelectContent>
                  {complaintsType.map((type, i) => (
                    <SelectItem key={i} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="priority"
                className="text-gray-800 dark:text-gray-300"
              >
                Urgency Level
              </Label>
              <Select
                value={taskData.priority}
                onValueChange={(value) =>
                  setTaskData((prev) => ({ ...prev, priority: value }))
                }
              >
                <SelectTrigger className="border-stone-800">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  {urgencyLevel.map((urgent) => (
                    <SelectItem key={urgent} value={urgent}>
                      {urgent}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label
              htmlFor="description"
              className="text-gray-800 dark:text-gray-300"
            >
              Desired Outcome (What resolution are you seeking?)
            </Label>
            <Textarea
              id="description"
              value={taskData.description}
              onChange={(e) =>
                setTaskData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              placeholder="Your expectation"
              rows={4}
              className="border-stone-800"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label
              htmlFor="description"
              className="text-gray-800 dark:text-gray-300"
            >
              Supporting Evidence (File upload for images, documents, etc.)
            </Label>
            <Input
              id="title"
              type="file"
              placeholder="Enter complain summary"
              required
              className="border-stone-800"
            />
          </div>

          <Label className="hover:bg-accent/50 flex items-start gap-3 rounded border p-3 has-[[aria-checked=true]]:border-neutral-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-neutral-900 dark:has-[[aria-checked=true]]:bg-neutral-950">
            <Checkbox
              id="toggle-2"
              defaultChecked
              className="data-[state=checked]:border-neutral-600 data-[state=checked]:bg-neutral-600 data-[state=checked]:text-white dark:data-[state=checked]:border-neutral-700 dark:data-[state=checked]:bg-neutral-700"
            />
            <div className="grid gap-1.5 font-normal">
              <p className="text-sm leading-none font-medium">Checkbox</p>
              <p className="text-muted-foreground text-sm">
                I confirm the information provided is accurate.
              </p>
            </div>
          </Label>

          <DialogFooter className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-stone-800"
            >
              Cancel
            </Button>
            <Button type="submit">Make Complaint</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
