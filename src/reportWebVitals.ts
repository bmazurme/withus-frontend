const reportWebVitals = (onPerfEntry: any) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // eslint-disable-next-line object-curly-newline
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
