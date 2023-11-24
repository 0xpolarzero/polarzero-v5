import { type FC } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui';
import { Form as FormComponent } from '@/components/ui';
import { Input } from '@/components/ui';
import { Textarea } from '@/components/ui';
import { useToast } from '@/components/ui';

const { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } = FormComponent;

// -----------------------------------------------------------------------------
// Schema
// -----------------------------------------------------------------------------
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email.',
  }),
  subject: z.string().min(6, {
    message: 'Subject must be at least 6 characters.',
  }),
  timeline: z.string(),
  budget: z.string(),
  company: z.string().optional(),
  twitter: z.string().optional(),
  message: z
    .string()
    .min(30, {
      message: 'Message must be at least 30 characters.',
    })
    .max(6000, {
      message: 'Message must be at most 6000 characters.',
    }),
});

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const HireMeForm: FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      name: '',
      email: '',
      subject: '',
      timeline: '',
      budget: '',
      company: '',
      twitter: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await fetch('/api/hire-me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (res.status === 200) {
      form.reset();
      toast({
        title: 'Message sent!',
        description: 'I will get back to you as soon as possible.',
        duration: 0,
      });
    } else {
      console.error(await res.json());
      toast({
        title: 'Error!',
        description: 'Something went wrong. Please try again later.',
        duration: 0,
      });
    }
  };

  const { toast } = useToast();
  // toast({
  //   title: 'Copied to clipboard',
  //   description: `${scale}${index + 1} - ${colorleading-tight }`,
  // 3);

  return (
    <div className="mt-0.5 flex flex-col space-y-2 rounded-xl border border-gray-6 bg-gray-2 p-3 text-sm text-gray-11 md:mt-1 md:rounded-2xl md:p-6 md:text-base">
      <h1 className="text-2xl font-semibold leading-tight tracking-tight text-gray-12 md:text-3xl">
        Contact
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-baseline lg:justify-between lg:space-x-8">
            <div className="w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name or pseudonym" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-4 lg:flex-row lg:items-baseline lg:justify-between lg:space-x-8">
            <div className="w-full">
              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Timeline</FormLabel>
                    <FormControl>
                      <Input placeholder="An estimated timeline" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget</FormLabel>
                    <FormControl>
                      <Input placeholder="An estimated budget" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-baseline lg:justify-between lg:space-x-8">
            <div className="w-full">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Twitter/X username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="The subject of your message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message"
                    // className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button intent="primary" type="submit">
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
};

HireMeForm.displayName = 'HireMeForm';

export default HireMeForm;
