getPopularVideos(): Observable<Video[]> {
  return this.http.get<Video[]>('http://localhost:3000/videos');
}
