export const getFetch = async (params) => {
  const { url, state, setState } = params;
  setState({
    ...state,
    isLoading: true,
  });
  try {
    const response = await fetch(url);
    const data = await response.json();
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  } catch (error) {
    setState({
      data: null,
      isLoading: false,
      hasError: error.message,
    });
  }
};
