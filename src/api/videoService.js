const baseUrl = "http://localhost:3001/playlist/";

export async function getVideos() {
  try {
    const videos = await fetch(baseUrl);
    return videos.json();
   } catch(e) {
     throw(e);
   }
}

export async function getVideo(videoId) {
  try {
    const videos = await fetch(baseUrl + videoId);
    return videos.json();
   } catch(e) {
     throw(e);
   }
}

export async function saveVideo(video) {
  try {
    const response = await fetch(baseUrl + (video.id || ""), {
      method: video.id ? "PUT" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(video)
    });

    if (response.ok) return response.json();
    if (response.status === 400) {
      const error = response.text();
      throw new Error(error);
    }
  } catch(e) {
    throw new Error("Network response was not ok.");
  }  
}

export async function deleteVideo(videoId) {
  try {
    const response = await fetch(baseUrl + videoId, { method: "DELETE" })

    if (response.ok) return response.json();
    if (response.status === 400) {
      const error = response.text();
      throw new Error(error);
    }
  } catch(e) {
    throw new Error("Network response was not ok.");
  }
}
