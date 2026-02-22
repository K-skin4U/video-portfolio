return entries.items.map((item: any) => {
  // 디버깅
  console.log('item.fields.Image:', item.fields.Image);
  console.log('Has fields?:', item.fields.Image?.fields);
  console.log('Has file?:', item.fields.Image?.fields?.file);
  console.log('Final URL:', item.fields.Image?.fields?.file?.url);
  
  return {
    id: item.sys.id,
    title: item.fields.title,
    description: item.fields.description,
    thumbnailImage: item.fields.Image?.fields?.file?.url,
    videos: item.fields.videos?.map((video: any) => ({
      url: video.fields.file.url,
      title: video.fields.title
    })),
    projectUrl: item.fields.url,
    technologies: item.fields.technologies,
    date: item.fields.date
  });
});