const NavControl = async () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('navbar').style.background = '#0d0d0d';
  } else {
    document.getElementById('navbar').style.background = 'none';
  }
};

export default NavControl;
