"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, Calendar as CalendarIcon, Clock, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  vehicleType: z.string().min(2, "Please select a vehicle type"),
  vehicleModel: z.string().min(2, "Vehicle model is required"),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

const disabledSlots = ["10:00 AM", "01:00 PM"]; // Mock unavailable

export default function BookingSteps() {
  const [step, setStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      vehicleType: "",
      vehicleModel: "",
      notes: "",
    },
  });

  const nextStep = () => setStep((p) => Math.min(p + 1, 5));
  const prevStep = () => setStep((p) => Math.max(p - 1, 1));

  const selectedService = services.find((s) => s.id === selectedServiceId);

  const onSubmit = (data: FormValues) => {
    // Show success modal
    setIsSuccessModalOpen(true);
  };

  const steps = [
    { num: 1, title: "Service" },
    { num: 2, title: "Date & Time" },
    { num: 3, title: "Details" },
    { num: 4, title: "Summary" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden relative">
      {/* Progress Steps */}
      <div className="flex flex-wrap justify-between items-center mb-12 relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-800 -z-10 -translate-y-1/2 rounded-full hidden sm:block" />
        <div 
          className="absolute top-1/2 left-0 h-1 bg-primary -z-10 -translate-y-1/2 rounded-full hidden sm:block transition-all duration-500 ease-in-out" 
          style={{ width: `${((step - 1) / 3) * 100}%` }}
        />
        
        {steps.map((s) => (
          <div key={s.num} className="flex flex-col items-center gap-2 relative z-10 w-1/4 sm:w-auto mt-4 sm:mt-0">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                step > s.num 
                  ? "bg-primary text-white" 
                  : step === s.num 
                  ? "bg-primary border-4 border-black text-white shadow-[0_0_0_2px_rgba(255,100,0,1)]" 
                  : "bg-neutral-800 text-neutral-500 border-2 border-neutral-700"
              }`}
            >
              {step > s.num ? <Check className="w-5 h-5" /> : s.num}
            </div>
            <span className={`text-xs sm:text-sm font-medium ${step >= s.num ? "text-white" : "text-neutral-500"}`}>
              {s.title}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[400px]"
        >
          {/* STEP 1: CHOOSE SERVICE */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-outfit font-bold text-white mb-6">Select a Service Package</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <Card 
                    key={service.id} 
                    className={`cursor-pointer transition-all duration-300 border-2 ${
                      selectedServiceId === service.id 
                        ? "border-primary bg-primary/5" 
                        : "border-neutral-800 bg-black hover:border-neutral-600"
                    }`}
                    onClick={() => setSelectedServiceId(service.id)}
                  >
                    <CardContent className="p-5 flex items-start gap-4 h-full relative">
                      {selectedServiceId === service.id && (
                        <div className="absolute top-4 right-4 text-primary">
                          <CheckCircle2 className="w-6 h-6 fill-primary/20" />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-white mb-1">{service.name}</h3>
                        <p className="text-sm text-neutral-400 mb-4 pr-6">{service.description}</p>
                        <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/5">
                          <span className="text-sm font-medium px-2 py-1 bg-neutral-800 rounded text-neutral-300">{service.duration}</span>
                          <span className="font-bold text-primary text-lg">${service.price}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: DATE & TIME */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-outfit font-bold text-white mb-6">Choose Date & Time</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-black p-4 rounded-2xl border border-neutral-800">
                  <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-primary" /> Select Date
                  </h3>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="mx-auto bg-transparent text-white"
                    classNames={{
                      day_selected: "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white",
                      day_today: "bg-neutral-800 text-white",
                      head_cell: "text-neutral-400",
                    }}
                    disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))}
                  />
                </div>
                
                <div className="bg-black p-6 rounded-2xl border border-neutral-800 flex flex-col">
                  <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" /> Available Slots
                  </h3>
                  
                  {date ? (
                    <div className="grid grid-cols-2 gap-3 flex-1">
                      {timeSlots.map((slot) => {
                        const isDisabled = disabledSlots.includes(slot);
                        return (
                          <button
                            key={slot}
                            disabled={isDisabled}
                            onClick={() => setTime(slot)}
                            className={`py-3 px-4 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 border ${
                              isDisabled 
                                ? "bg-neutral-900 border-neutral-900 text-neutral-600 cursor-not-allowed line-through" 
                                : time === slot 
                                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
                                : "bg-neutral-900 border-neutral-800 text-white hover:border-primary/50"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-neutral-500 h-[250px] border-2 border-dashed border-neutral-800 rounded-xl">
                      <CalendarIcon className="w-10 h-10 mb-3 opacity-50" />
                      <p>Please select a date first</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: DETAILS FORM */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-outfit font-bold text-white mb-6">Vehicle & Contact Details</h2>
              <form id="booking-form" onSubmit={form.handleSubmit(onSubmit)} className="bg-black p-6 md:p-8 rounded-2xl border border-neutral-800 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-300">Full Name *</label>
                    <Input {...form.register("fullName")} placeholder="John Doe" className="bg-neutral-900 border-neutral-800 focus-visible:ring-primary h-12 text-white" />
                    {form.formState.errors.fullName && <p className="text-red-500 text-xs mt-1">{form.formState.errors.fullName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-300">Phone Number *</label>
                    <Input {...form.register("phone")} placeholder="(555) 123-4567" className="bg-neutral-900 border-neutral-800 focus-visible:ring-primary h-12 text-white" />
                    {form.formState.errors.phone && <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300">Email Address *</label>
                  <Input {...form.register("email")} type="email" placeholder="john@example.com" className="bg-neutral-900 border-neutral-800 focus-visible:ring-primary h-12 text-white" />
                  {form.formState.errors.email && <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 flex flex-col justify-end">
                    <label className="text-sm font-medium text-neutral-300">Vehicle Type *</label>
                    <Select onValueChange={(val: string | null) => { if (val) form.setValue("vehicleType", val); }}>
                      <SelectTrigger className="bg-neutral-900 border-neutral-800 focus-visible:ring-primary h-12 text-white">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-900 border-neutral-800 text-white">
                        <SelectItem value="Sedan">Sedan</SelectItem>
                        <SelectItem value="Coupe">Coupe / Sports</SelectItem>
                        <SelectItem value="SUV">SUV / Crossover</SelectItem>
                        <SelectItem value="Truck">Pickup Truck</SelectItem>
                        <SelectItem value="Van">Van / Minivan</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.vehicleType && <p className="text-red-500 text-xs mt-1">{form.formState.errors.vehicleType.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-300">Vehicle Make & Model *</label>
                    <Input {...form.register("vehicleModel")} placeholder="e.g. 2022 Tesla Model 3" className="bg-neutral-900 border-neutral-800 focus-visible:ring-primary h-12 text-white" />
                    {form.formState.errors.vehicleModel && <p className="text-red-500 text-xs mt-1">{form.formState.errors.vehicleModel.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300">Additional Notes (Optional)</label>
                  <Textarea {...form.register("notes")} placeholder="Any specific areas to focus on? Pet hair, deep stains, etc." className="bg-neutral-900 border-neutral-800 focus-visible:ring-primary min-h-[100px] text-white resize-none" />
                </div>
              </form>
            </div>
          )}

          {/* STEP 4: SUMMARY */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-outfit font-bold text-white mb-6 text-center">Review Your Booking</h2>
              
              <div className="bg-black rounded-3xl border border-neutral-800 p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                
                <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-neutral-800 border-dashed flex items-center justify-between">
                  <span>Booking Summary</span>
                  <span className="text-sm font-normal text-neutral-500">Ref: #{Math.floor(Math.random() * 90000) + 10000}</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Service</p>
                      <p className="text-lg font-medium text-white">{selectedService?.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Date & Time</p>
                      <p className="text-lg font-medium text-white flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-primary" />
                        {date ? format(date, "MMMM d, yyyy") : ""} at {time}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Vehicle</p>
                      <p className="text-lg font-medium text-white">
                        {form.getValues().vehicleModel} <span className="text-sm text-neutral-400">({form.getValues().vehicleType})</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Customer</p>
                      <p className="text-lg font-medium text-white">{form.getValues().fullName}</p>
                      <p className="text-sm text-neutral-400">{form.getValues().email}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-900 rounded-2xl p-6 flex items-center justify-between border border-neutral-800 mt-8 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary" />
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">Total Estimated Amount</p>
                    <p className="text-3xl font-bold text-white">${selectedService?.price}</p>
                  </div>
                  <p className="text-sm text-neutral-500 max-w-[150px] text-right">Pay in person after service completion.</p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 pt-6 border-t border-neutral-800 flex justify-between">
        <Button 
          variant="outline" 
          onClick={prevStep} 
          disabled={step === 1}
          className="bg-neutral-900 border-neutral-700 hover:bg-neutral-800 hover:text-white px-6 hidden sm:flex"
        >
          <ChevronLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button 
          variant="outline" 
          onClick={prevStep} 
          disabled={step === 1}
          className="bg-neutral-900 border-neutral-700 hover:bg-neutral-800 w-12 p-0 sm:hidden flex justify-center items-center"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {step < 4 ? (
          <Button 
            onClick={nextStep} 
            className="px-8 bg-primary hover:bg-orange-600 font-medium"
            disabled={
              (step === 1 && !selectedServiceId) || 
              (step === 2 && (!date || !time))
            }
          >
            Continue <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        ) : (
          <Button 
            onClick={form.handleSubmit(onSubmit)} 
            className="px-8 bg-green-600 hover:bg-green-700 font-bold shadow-lg shadow-green-900/50"
          >
            Confirm Booking <CheckCircle2 className="ml-2 w-5 h-5" />
          </Button>
        )}
      </div>

      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className="bg-neutral-950 border-neutral-800 sm:max-w-md p-8 text-center">
          <DialogHeader>
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <DialogTitle className="text-2xl font-outfit text-white text-center mb-2">Booking Confirmed!</DialogTitle>
            <DialogDescription className="text-neutral-400 text-center text-base">
              Your appointment for <span className="text-white font-medium">{date ? format(date, "MMM d") : ""} at {time}</span> has been successfully scheduled. We've sent a confirmation email to {form.getValues().email}.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-8 flex justify-center sm:justify-center">
            <Button onClick={() => window.location.href = "/"} className="bg-primary hover:bg-orange-600 font-semibold px-8 rounded-full h-12">
              Return to Home
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
