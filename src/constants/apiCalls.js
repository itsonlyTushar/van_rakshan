

export const apiCall = async (url) => {
  try {
    const result = await fetch(url);
    if (result.status === 429) {
      const callStatus = true;
      return callStatus;
    } else {
      const data = await result.json();
      return data;s
    }
  } catch (error) {
    console.error('Error while making api request..', error.message)
  }
};
