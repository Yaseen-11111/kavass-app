import React, { useState } from 'react';
import { portfolioData } from '../data/content';

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="py-20 px-6 text-center text-gray-900 dark:text-white transition-colors">
            <h2 className="text-4xl font-bold mb-12">Recent Masterpieces</h2>

            {/* Project Grid */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
                {portfolioData.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setSelectedProject(item)}
                        className="text-left block group"
                    >
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden aspect-video relative border border-gray-200 dark:border-gray-700">
                            {/* Changed to object-contain so full image fits without cropping */}
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white font-bold text-2xl">{item.title}</span>
                                <span className="text-blue-400 font-medium mt-2">{item.client} • {item.category}</span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Preview Section */}
            {selectedProject && (
                <div className="max-w-7xl mx-auto mt-12 border-t border-gray-200 dark:border-gray-700 pt-10">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold">{selectedProject.title} (Web Preview)</h3>
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
                        >
                            Close
                        </button>
                    </div>

                    {/* Browser-style Wrapper */}
                    <div className="w-full h-[600px] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-300 flex flex-col">
                        {/* Browser Top Bar */}
                        <div className="bg-gray-200 p-3 flex items-center gap-2 border-b border-gray-300">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex-1 bg-white mx-4 rounded-md text-xs text-gray-500 py-1 text-center font-mono">
                                {selectedProject.liveUrl || "localhost:3000"}
                            </div>
                        </div>

                        {/* Iframe */}
                        <iframe
                            src={selectedProject.previewUrl}
                            title={selectedProject.title}
                            className="w-full h-full flex-1"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};