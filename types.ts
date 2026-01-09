import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imagePrompt: string;
  fallbackImage: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ImageData {
  url: string;
  isGenerated: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image?: string;
}