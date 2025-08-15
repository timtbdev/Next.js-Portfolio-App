"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoaderCircleIcon as LoadingIcon,
  SendHorizonalIcon as SendIcon,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Form validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  // State to track form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with validation schema and default values
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log("Starting form submission with values:", values);
      setIsSubmitting(true);

      // Send form data to API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (!response.ok) {
        console.error("API Error:", data.error);

        // Handle specific Resend API domain verification error
        if (
          data.name === "validation_error" &&
          data.message.includes("domain is not verified")
        ) {
          toast.error(
            "Email service is temporarily unavailable. Please try again later or contact us directly.",
          );
          return;
        }

        throw new Error(data.error || "Something went wrong");
      }

      // Show success message and reset form
      toast.success("Message sent successfully!");
      form.reset();
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Form submission error:", error);
      // Provide a more user-friendly error message
      toast.error(
        "Failed to send message. Please try again later or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name input field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email input field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Message textarea field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message"
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Submit button with loading state */}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <LoadingIcon className="size-4 animate-spin" />
          ) : (
            <SendIcon className="size-4" />
          )}
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
