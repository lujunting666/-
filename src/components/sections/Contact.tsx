import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { siteContent } from "@/data/content";

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
};

export default function Contact() {
  const { email, location, social } = siteContent.personalInfo;

  return (
    <SectionWrapper id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          联系我
        </h2>
        <p className="text-center text-gray-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
          有项目想法或只是想打个招呼？我很乐意听到你的消息。
        </p>

        <div className="max-w-xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
              <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-slate-400">
                  邮箱
                </p>
                <a
                                      href={`mailto:${email}`}
                                      className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>

            {location && (
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-slate-400">
                    位置
                  </p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {location}
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                {social.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                    aria-label={link.platform}
                  >
                    {socialIcons[link.platform] || <Github className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}