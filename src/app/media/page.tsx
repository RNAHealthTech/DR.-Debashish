'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Newspaper, Radio, ExternalLink, Video, Tv } from 'lucide-react';

// Custom Brand Icons since Lucide v1 removed them
const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const YoutubeIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

const MediaPage = () => {
  const mediaItems = [
    {
      type: "Interview",
      title: "DD Morning Show | Mental Health | Autism: A World Full of Possibilities",
      source: "Doordarshan",
      date: "Awareness",
      icon: <Tv size={20} />,
      link: "https://www.youtube.com/watch?v=25oEXusgcpA"
    },
    {
      type: "Podcast",
      title: "LIVE : Total Health | Stress होगा ख़त्म, दिमाग़ होगा Healthy",
      source: "Podcast Series",
      date: "Wellness",
      icon: <Radio size={20} />,
      link: "https://www.youtube.com/watch?v=668BTBS1FYc"
    },
    {
      type: "Article",
      title: "Editor's Choice Cephalalgia Episode 10 - Interview with Debashish Chowdhury",
      source: "Cephalalgia Journal",
      date: "Academic",
      icon: <Newspaper size={20} />,
      link: "https://www.youtube.com/watch?v=NoAHEJ2deXM"
    }
  ];

  const videos = [
    {
      title: "Stroke: Recognise the Signs and Act Fast | BLK-Max Hospital",
      duration: "05:24",
      url: "https://www.youtube.com/watch?v=90QaraGGL0c",
      thumbnail: "https://img.youtube.com/vi/90QaraGGL0c/maxresdefault.jpg",
      platform: "YouTube"
    },
    {
      title: "Good Evening India I Prevention of Headache & Migraine",
      duration: "24:15",
      url: "https://www.youtube.com/watch?v=NbzRd2VXgKM",
      thumbnail: "https://img.youtube.com/vi/NbzRd2VXgKM/maxresdefault.jpg",
      platform: "YouTube"
    },
    {
      title: "Different types of Migraine Treatment",
      duration: "10:45",
      url: "https://www.youtube.com/watch?v=V6EjfGc8Zuc",
      thumbnail: "https://img.youtube.com/vi/V6EjfGc8Zuc/maxresdefault.jpg",
      platform: "YouTube"
    },
    {
      title: "DD Morning Show | Hello Doctor | Brain Tumour",
      duration: "15:30",
      url: "https://www.youtube.com/watch?v=nrgIhb8GOOY",
      thumbnail: "https://img.youtube.com/vi/nrgIhb8GOOY/maxresdefault.jpg",
      platform: "YouTube"
    }
  ];

  const socialMedia = [
    {
      platform: "Facebook",
      title: "Dr Debashish Chowdhury address on World Brain Day | IAN",
      link: "https://www.facebook.com/IndianAcademyofNeurologyofficial/videos/853488730015117/",
      icon: <FacebookIcon size={24} className="text-[#1877F2]" />
    },
    {
      platform: "Instagram",
      title: "President of IAN wishes all a happy Diwali",
      link: "https://www.instagram.com/reel/CzfvP__pvch/",
      icon: <InstagramIcon size={24} className="text-[#E4405F]" />
    },
    {
      platform: "Instagram",
      title: "DD Morning Show: Autism - A World Full of Possibilities",
      link: "https://www.instagram.com/reel/DWqSXIYiurR/",
      icon: <InstagramIcon size={24} className="text-[#E4405F]" />
    }
  ];

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-white/70 dark:bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-accent/20 shadow-sm">
            <Radio size={16} className="text-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">News & Insights</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6">
            In the <span className="text-gradient">Media</span>
          </h1>
          <p className="text-xl text-primary font-bold max-w-3xl mx-auto">
            Latest interviews, articles, and public health awareness features across national and international media platforms.
          </p>
        </motion.div>

        {/* Featured News Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {mediaItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[3rem] border border-white/20 shadow-lg group hover:border-accent/40 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-accent/10 rounded-2xl text-accent">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black bg-primary/5 px-3 py-1 rounded-full uppercase tracking-widest">{item.date}</span>
              </div>
              <h3 className="text-xl font-black mb-4 leading-tight group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-8">{item.source}</p>
              <a 
                href={item.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-accent text-[10px] font-black uppercase tracking-widest hover:translate-x-2 transition-transform"
              >
                <span>Read More</span>
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Videos Section */}
        <div className="mb-32">
          <div className="flex items-center space-x-4 mb-12">
            <Video className="text-accent" size={32} />
            <h2 className="text-4xl font-black tracking-tight">Featured Videos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {videos.map((video, i) => (
              <motion.a
                key={i}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -10 }}
                className="relative group cursor-pointer block"
              >
                <div className="aspect-video bg-primary/5 rounded-[3rem] overflow-hidden border border-white/20 shadow-xl relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play fill="white" className="text-white ml-1" size={32} />
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-black">
                      <YoutubeIcon size={12} className="text-red-500" />
                      <span>{video.platform}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 px-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-black tracking-tight mb-2 group-hover:text-accent transition-colors">{video.title}</h3>
                    <span className="text-[10px] font-black bg-accent/10 text-accent px-3 py-1 rounded-full shrink-0 ml-4">{video.duration}</span>
                  </div>
                  <p className="text-secondary font-medium opacity-60 italic">Educational Series</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-32">
          <div className="flex items-center space-x-4 mb-12">
            <Radio className="text-accent" size={32} />
            <h2 className="text-4xl font-black tracking-tight">Social Updates</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {socialMedia.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2.5rem] border border-white/20 shadow-lg group hover:border-accent/40 transition-all flex flex-col justify-between hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-lg font-black mb-4 leading-tight group-hover:text-accent transition-colors">{item.title}</h3>
                </div>
                <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-secondary opacity-60">
                  <span>View Post</span>
                  <ExternalLink size={12} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Press Contact */}
        <div className="text-center p-20 glass rounded-[4rem] border border-accent/30 bg-accent/10 shadow-2xl">
          <h2 className="text-4xl font-black mb-6 tracking-tight">Media Enquiries</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto font-medium opacity-80 mb-10">
            For interviews, guest articles, or medical consultancy for media features, please reach out to our communications office.
          </p>
          <a href="/contact" className="bg-primary text-white dark:bg-white dark:text-primary px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:scale-105 transition-transform inline-block">
            Contact Media Office
          </a>
        </div>
      </div>
    </main>
  );
};

export default MediaPage;
