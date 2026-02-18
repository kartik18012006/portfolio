"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kartikms5477@gmail.com",
      href: "mailto:kartikms5477@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8448250988",
      href: "tel:+918448250988",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Ready to bring your idea to life? We&apos;re always open to discussing
            new projects and opportunities. Let&apos;s build something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:border-neutral-700 transition-all duration-300 group">
                  <a
                    href={contact.href}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 rounded-lg bg-neutral-800 group-hover:bg-neutral-700 transition-colors">
                      <Icon className="text-neutral-300" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400 mb-1">
                        {contact.label}
                      </p>
                      <p className="text-neutral-50 group-hover:text-white transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

