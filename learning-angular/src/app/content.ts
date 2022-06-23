export interface Content {
  readonly id: number;
  name: string;
  type?: string;
  imageUrl?: string;
  body?: string; // cannot be null
  tags?: string[];
  // the equivalent of using the ?
  // body: string | undefined;
}
