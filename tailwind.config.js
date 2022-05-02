module.exports = {
  content: [  './pages/**/*.{html,js}',
              './index.html',
              './components/**/*.{html,js}',],
  theme: {
    extend: {


      screens: {
        fhd: { 'max': '1920px' },
        hd: { 'max': '1440px' },
        xxl: { 'max': '1366px' },
        xl: { 'max': '1024px' },
        lg: { 'max': '976px' },
        md: { 'max': '768px' },
        sm: { 'max': '414px' },
      },

      width: {
        '2px': '2px',
        '14%': '15%',
        '55%': '55%',
        '68%': '68%',
        '85%': '85%',
        '95%': '95%',
      },

      height:{
        '136%': '136px',
        'person': '75vh',
      },
      colors:{
        primaryColor: '#57697D',
        secondaryColor:'#20387A', 
        tertiaryColor: '#85A0BF',
        darkBlue: '#15316A',
        blue500:'#255ED1',
        white:'#ffff',
        blue300:'#6C9DFF',
        gray:'#F7FAFF',


    },
   
    fontFamily: {
      'josefin':["'Josefin Sans'", "sans-serif"],
  },
  },
  plugins: [],
}
}