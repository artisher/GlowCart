import { useForm } from "react-hook-form";
import { HelpCircle } from "lucide-react";

type FormValues = {
    subject: string;
    fullName: string;
    email: string;
    phone: string;
    orderId?: string;
    message: string;
    files?: FileList;
};

const SUBJECTS = [
    "Order tracking",
    "Payment issue",
    "Return/Refund",
    "Question about product",
    "Suggestion or feedback",
    "Other",
];

const MAX_IMAGE_MB = 5;
const MAX_VIDEO_MB = 50;

export default function ContactUs() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        clearErrors,
        watch,
    } = useForm<FormValues>({ mode: "onBlur" });

    const files = watch("files");

    const onSubmit = (data: FormValues) => {
        console.log("Contact form data:", data);
        alert("Your message has been successfully submitted. ❤️");
    };

    function validateFiles(list?: FileList) {
        clearErrors("files");
        if (!list || list.length === 0) return true;

        for (let i = 0; i < list.length; i++) {
            const f = list.item(i)!;
            const ext = f.name.toLowerCase();

            if ((ext.endsWith(".mp4") && f.size > MAX_VIDEO_MB * 1024 * 1024) ||
                (!ext.endsWith(".mp4") && f.size > MAX_IMAGE_MB * 1024 * 1024)) {
                setError("files", {
                    type: "manual",
                    message: ext.endsWith(".mp4")
                        ? `Video size must not exceed ${MAX_VIDEO_MB} MB.`
                        : `Image size must not exceed ${MAX_IMAGE_MB} MB.`,
                });
                return false;
            }

            const isImage = ext.endsWith(".png") || ext.endsWith(".jpg") || ext.endsWith(".jpeg");
            const isVideo = ext.endsWith(".mp4");
            if (!isImage && !isVideo) {
                setError("files", { type: "manual", message: "Only PNG/JPG images or MP4 videos are allowed." });
                return false;
            }
        }
        return true;
    }

    return (
        <div  className="min-h-[70vh] bg-white">
            <div className="max-w-5xl mx-auto px-4 py-10">
              
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
                
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                            Contact <span className="text-[#FF5C8D] text-2xl">GlowCart</span>
                        </h2>

                        <a
                            href="#/faq"
                            className="inline-flex items-center gap-2 rounded-xl border border-cyan-300 text-cyan-600 px-4 py-2 text-sm hover:bg-cyan-50 transition"
                        >
                            <HelpCircle className="w-4 h-4" />
                            FAQ
                        </a>
                    </div>

                    <p className="text-gray-500 text-sm md:text-[15px] mb-8">
                        Please check the frequently asked questions before sending an email or calling us.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Subject */}
                        <div className="md:order-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Subject <span className="text-rose-500">*</span>
                            </label>
                            <select
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200 ease-in-out"
                                defaultValue=""
                                {...register("subject", { required: "Subject selection is required." })}
                            >
                                <option value="" disabled>Select a subject</option>
                                {SUBJECTS.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                            {errors.subject && <p className="text-rose-500 text-xs mt-1">{errors.subject.message}</p>}
                        </div>

                        {/* Full Name */}
                        <div className="md:order-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., Sarah Johnson"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200 ease-in-out"
                                {...register("fullName", { required: "Full name is required." })}
                            />
                            {errors.fullName && <p className="text-rose-500 text-xs mt-1">{errors.fullName.message}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200 ease-in-out"
                                {...register("email", {
                                    required: "Email is required.",
                                    pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address." },
                                })}
                            />
                            {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="tel"
                                placeholder="0912xxxxxxx"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200 ease-in-out"
                                {...register("phone", {
                                    required: "Phone number is required.",
                                    minLength: { value: 8, message: "Enter a valid phone number." },
                                })}
                            />
                            {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone.message}</p>}
                        </div>

                        {/* Order Id (optional) */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Order ID</label>
                            <input
                                type="text"
                                placeholder="If applicable"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200 ease-in-out"
                                {...register("orderId")}
                            />
                        </div>

                        {/* Message */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message <span className="text-rose-500">*</span>
                            </label>
                            <textarea
                                rows={6}
                                placeholder="Please provide a detailed and clear message..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200 ease-in-out"
                                {...register("message", { required: "Message is required." })}
                            />
                            {errors.message && <p className="text-rose-500 text-xs mt-1">{errors.message.message}</p>}
                        </div>

                        {/* Attachments */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Attachments (optional)</label>
                            <input
                                type="file"
                                multiple
                                accept=".png,.jpg,.jpeg,.mp4"
                                className="block w-full text-sm text-gray-600 file:me-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:bg-[#FF5C8D] file:text-white hover:file:bg-[#ff6a98] cursor-pointer"
                                {...register("files", {
                                    validate: () => validateFiles(files),
                                })}
                                onChange={(e) => validateFiles(e.target.files || undefined)}
                            />
                            <p className="text-gray-500 text-xs mt-2">
                                Up to 5 PNG/JPG images (each up to {MAX_IMAGE_MB} MB) or one MP4 video (up to {MAX_VIDEO_MB} MB).
                            </p>
                            {errors.files && <p className="text-rose-500 text-xs mt-1">{errors.files.message}</p>}
                        </div>

                        {/* Actions */}
                        <div className="md:col-span-2 flex items-center justify-start gap-3 pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="rounded-xl bg-[#FF5C8D] text-white px-6 py-3 font-semibold hover:brightness-110 disabled:opacity-50"
                            >
                                {isSubmitting ? "Sending…" : "Send Message"}
                            </button>
                            <span className="text-xs text-gray-500">
                                By submitting, you agree to our{" "}
                                <a className="underline hover:text-[#FF5C8D]" href="#/terms">Terms of Use</a> and{" "}
                                <a className="underline hover:text-[#FF5C8D]" href="#/privacy">Privacy Policy</a>.
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
