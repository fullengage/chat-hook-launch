import React, { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleContext";
import { submitDemoRequest } from "@/services/leadService";
import { trackDemoRequest, trackFormStart } from "@/services/analytics";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const DemoRequestForm: React.FC = () => {
  const { locale, dict } = useLocale();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorDetail, setErrorDetail] = useState<string>("");
  const startedRef = useRef(false);

  const initialCountry =
    searchParams.get("country") ||
    (locale === "pt-br" ? "Brasil" : locale === "zh-cn" ? "China" : "");
  const initialSector = searchParams.get("sector") || "";
  const initialPurpose =
    searchParams.get("purpose") ||
    dict.form.purposeOptions[0]?.value ||
    "find-distributors";
  const initialStage =
    searchParams.get("stage") ||
    dict.form.stageOptions[0]?.value ||
    "exploring-market";

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(2, dict.form.validation.name),
        email: z.string().trim().email(dict.form.validation.email),
        company: z.string().trim().min(2, dict.form.validation.company),
        country: z.string().trim().min(2, dict.form.validation.country),
        phone: z.string().trim().optional(),
        purpose: z.string().min(1, dict.form.validation.purpose),
        sector: z.string().trim().default(""),
        stage: z.string().min(1),
        message: z.string().trim().default(""),
        consent: z.boolean().refine((v) => v === true, {
          message: dict.form.validation.consent,
        }),
      }),
    [dict.form.validation],
  );

  type FormValues = z.infer<typeof schema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      country: initialCountry,
      phone: "",
      purpose: initialPurpose,
      sector: initialSector,
      stage: initialStage,
      message: "",
      consent: false,
    },
  });

  const handleFirstInteraction = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackFormStart("demo_request", locale);
    }
  };

  const onSubmit = async (values: FormValues) => {
    setStatus("submitting");
    setErrorDetail("");

    const result = await submitDemoRequest({
      name: values.name,
      email: values.email,
      company: values.company,
      country: values.country,
      phone: values.phone,
      purpose: values.purpose,
      sector: values.sector,
      stage: values.stage,
      message: values.message,
      locale,
      page: location.pathname,
    });

    if (result.ok) {
      trackDemoRequest(locale, values.country, values.purpose);
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setErrorDetail(result.errorMessage ?? dict.form.errorMessage);
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-extrabold text-emerald-950">{dict.form.successTitle}</h3>
        <p className="text-sm text-emerald-900 leading-relaxed">{dict.form.successMessage}</p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setStatus("idle")}
          className="border-emerald-300 text-emerald-900"
        >
          {dict.form.submitLabel}
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onFocus={handleFirstInteraction}
        className="space-y-4"
        noValidate
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold text-[#0f172a]">
                  {dict.form.nameLabel}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={dict.form.namePlaceholder}
                    className="bg-white border-slate-300 text-[#0f172a]"
                  />
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
                <FormLabel className="text-xs font-bold text-[#0f172a]">
                  {dict.form.emailLabel}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder={dict.form.emailPlaceholder}
                    className="bg-white border-slate-300 text-[#0f172a]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold text-[#0f172a]">
                  {dict.form.companyLabel}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={dict.form.companyPlaceholder}
                    className="bg-white border-slate-300 text-[#0f172a]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold text-[#0f172a]">
                  {dict.form.countryLabel}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={dict.form.countryPlaceholder}
                    className="bg-white border-slate-300 text-[#0f172a]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="sector"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold text-[#0f172a]">
                  {dict.form.sectorLabel}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={dict.form.sectorPlaceholder}
                    className="bg-white border-slate-300 text-[#0f172a]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold text-[#0f172a]">
                  {dict.form.stageLabel}
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white border-slate-300 text-[#0f172a]">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {dict.form.stageOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold text-[#0f172a]">
                  {dict.form.phoneLabel}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={dict.form.phonePlaceholder}
                    className="bg-white border-slate-300 text-[#0f172a]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="purpose"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold text-[#0f172a]">
                  {dict.form.purposeLabel}
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white border-slate-300 text-[#0f172a]">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {dict.form.purposeOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold text-[#0f172a]">
                {dict.form.messageLabel}
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={4}
                  placeholder={dict.form.messagePlaceholder}
                  className="bg-white border-slate-300 text-[#0f172a]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border border-slate-200 bg-slate-50 p-3.5">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-snug">
                <FormLabel className="text-xs font-medium text-slate-700 cursor-pointer">
                  {dict.form.consentLabel}
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        {status === "error" && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-800">
            {dict.form.errorMessage} ({errorDetail})
          </div>
        )}

        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full h-12 rounded-xl bg-[#ff6b00] hover:bg-[#ea580c] text-white font-bold text-sm"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
              {dict.form.submittingLabel}
            </>
          ) : (
            dict.form.submitLabel
          )}
        </Button>

        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
          <ShieldCheck className="h-3.5 w-3.5 text-[#ff6b00]" aria-hidden="true" />
          <span>LGPD Compliant · DeepB2B</span>
        </div>
      </form>
    </Form>
  );
};

export default DemoRequestForm;
