import React from 'react';
import { MessageCircle } from 'lucide-react';
import * as Icons from 'lucide-react';

// Use it as a standard component
import { contactInfo } from '../data/content';


export const Contact = () => (
    <section className="py-24 px-6 text-center bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-6">Skip the admin. Talk directly to me.</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Request your free bespoke demo today. No corporate contact forms. Reach out where you're comfortable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1">
                <MessageCircle size={24} /> WhatsApp Me
            </a>
            <a href={contactInfo.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1">
                <Icons.Instagram size={24} /> DM on Instagram
            </a>
        </div>
    </section>
);