export interface ContentItem {
  title: string;
  summary: string;
  id?: string[];
}

export interface AgentState {
  messages: any[];
  logs?: any[];
  content_items?: ContentItem[];
  next_action?: string;
}
