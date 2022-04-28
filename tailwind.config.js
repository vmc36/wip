module.exports = {
  content: [  './pages/**/*.{html,js}',
              './components/**/*.{html,js}',],
  theme: {
    extend: {

      width: {
        '2px': '2px',
        '14%': '15%',
        '55%': '55%',
      },

      height:{
        '136%': '136px'
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