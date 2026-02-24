import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToHome from "@/components/BackToHome";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const brokerFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  telephone: z.string().trim().min(1, "Telephone is required").max(20),
  email: z.string().trim().email("Invalid email address").max(255),
  affiliatedBrokers: z.enum(["yes", "no"], { required_error: "Please select an option" }),
  pendingBusiness: z.enum(["yes", "no"], { required_error: "Please select an option" }),
  licensed: z.enum(["yes", "no"], { required_error: "Please select an option" }),
  eoCoverage: z.enum(["yes", "no"], { required_error: "Please select an option" }),
  notes: z.string().trim().max(2000).optional(),
});

type BrokerFormValues = z.infer<typeof brokerFormSchema>;

const radioQuestions = [
  { name: "affiliatedBrokers" as const, label: "Are you connected to any affiliated brokers?" },
  { name: "pendingBusiness" as const, label: "Do you have immediate pending business?" },
  { name: "licensed" as const, label: "Are you life and health licensed in your home state?" },
  { name: "eoCoverage" as const, label: "Do you have E&O coverage?" },
];

const BrokerAppointmentPage = () => {
  const { toast } = useToast();
  const form = useForm<BrokerFormValues>({
    resolver: zodResolver(brokerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      telephone: "",
      email: "",
      notes: "",
    },
  });

  const onSubmit = (data: BrokerFormValues) => {
    toast({
      title: "Application Received",
      description: "Thanks for taking the time to reach out to us. We will be following up soon!",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <BackToHome />
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-black text-primary-foreground mb-4">
                Get Appointed with <span className="text-gold">AMETrust®</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Complete the form below to begin the appointment process.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="First name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="telephone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telephone</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Radio Questions */}
                  <div className="space-y-6">
                    {radioQuestions.map((q) => (
                      <FormField
                        key={q.name}
                        control={form.control}
                        name={q.name}
                        render={({ field }) => (
                          <FormItem className="p-5 rounded-lg bg-surface border border-border">
                            <FormLabel className="text-sm font-semibold text-primary">{q.label}</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="flex gap-6 mt-2"
                              >
                                <div className="flex items-center gap-2">
                                  <RadioGroupItem value="yes" id={`${q.name}-yes`} />
                                  <Label htmlFor={`${q.name}-yes`}>Yes</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                  <RadioGroupItem value="no" id={`${q.name}-no`} />
                                  <Label htmlFor={`${q.name}-no`}>No</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>

                  {/* Notes */}
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any custom messaging you may think is important..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gold hover:bg-gold-dark text-primary-foreground font-bold shadow-gold transition-all duration-200 hover:scale-[1.01]"
                  >
                    <Send className="mr-2 w-4 h-4" />
                    Submit Application
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BrokerAppointmentPage;
