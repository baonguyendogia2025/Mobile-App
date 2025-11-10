
export enum Tab {
  News = 'News',
  Video = 'Video',
  ThreeD = '3D',
  AR = 'AR',
  AIChat = 'AI Chat',
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
