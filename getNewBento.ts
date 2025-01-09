const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Shrey%20Mehra&g=ShreyMehra&x=&l=shreyme&i=https%3A%2F%2Fpreview.redd.it%2Fiwj7ej9xwdp91.jpg%3Fwidth%3D1080%26crop%3Dsmart%26auto%3Dwebp%26s%3D71710029d0783925e25bc117825a66ad46bdfbac&p=https%3A%2F%2Fleetcode.com%2FFuschiaChief%2F&z=b1d42";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
