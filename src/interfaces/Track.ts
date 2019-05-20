/**
 * A Sound Cloud track
 */
export default interface Track {
  id: number;
  title: string;
  user: Artist;
  genre: string;
  description: string;
  stream_url: string;
  artwork_url: string;
  created_at: Date;
  duration: number;
  likes_count: number;
  tag_list: string;
  reposts_count: number;
}

/**
 * A Sound Cloud user who upload music
 */
interface Artist {
  id: number;
  username: string;
  avatar_url: string;
}