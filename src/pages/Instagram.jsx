import React, { useEffect, useState } from "react";

function InstagramPage() {
  const [data, setData] = useState([]);
  const [media, setMedia] = useState([]);

  const accessToken =
    "IGQWRQdEwwU2FVSkd1N0FVM1l0UTVrcDdldTFiWXlOdWk2a1QyX1dMcm5md2lobUNBcGl2RDZAobV9TT0wtNzBTYWpGU3ppdWxIMUFOTGhlVjhNZAVhwOW1GLVdWQnpGZAEx2blZAVNkNaaTN2VDNpNGJoTzlONlQ2SDlRbkJ5bUNTNTU2dwZDZD";

  const url1 = `https://graph.instagram.com/me/media?fields=id,caption&access_token=${accessToken}`;

  const getData = async () => {
    try {
      const res = await fetch(url1);
      const data = await res.json();
      console.log(data);
      setData(data.data);
    } catch (e) {
      console.error("Error fetching data", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  useEffect(() => {
    const getMedia = async () => {
      const mediaData = [];

      for (const item of data) {
        const url2 = `https://graph.instagram.com/${item.id}?fields=id,media_type,media_url,username,timestamp&access_token=${accessToken}`;

        try {
          const res = await fetch(url2);
          const data = await res.json();
          mediaData.push(data);
        } catch (e) {
          console.error("Error fetching data", e);
        }
      }
      setMedia(mediaData);
    };

    getMedia();
  }, [data, accessToken]);

  return (
    <div>
      <h2>Check out more on Instagram</h2>

      {media.map((item) => (
        <div key={item.id}>
          <img src={item.media_url} />
        </div>
      ))}
    </div>
  );
}

export default InstagramPage;
