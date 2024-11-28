ngOnInit() {
  const videoId = this.route.snapshot.paramMap.get('id');
  this.videoService.getVideoById(videoId).subscribe(video => {
    this.video = video;
    this.incrementViews(video.id);
  });
}

incrementViews(id: string) {
  this.http.patch(`http://localhost:3000/videos/${id}`, {
    views: this.video.views + 1,
  }).subscribe();
}
