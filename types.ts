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