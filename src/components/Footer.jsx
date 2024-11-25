
function footer() {
  return (
      <div className="bg-purple-700">
        <div className="mx-10 flex justify-between items-center py-10">
            <svg width="214" height="156" viewBox="0 0 214 156" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.984375 9.98828C0.984375 15.496 5.44929 19.9609 10.957 19.9609H40.0664H45.1484C63.9261 19.9609 79.1484 35.1833 79.1484 53.9609V87.9727V146.012C79.1484 151.519 83.6133 155.984 89.1211 155.984C94.6288 155.984 99.0938 151.519 99.0938 146.012V78V34.0156C99.0938 15.2379 83.8714 0.015625 65.0938 0.015625H50.0391H10.957C5.44929 0.015625 0.984375 4.48053 0.984375 9.98828Z" fill="white"/>
            <path d="M114.906 78V146.012C114.906 151.519 119.371 155.984 124.879 155.984C130.387 155.984 134.852 151.519 134.852 146.012V87.9727V53.8711C134.852 35.0934 150.074 19.8711 168.852 19.8711H173.934H203.133C208.591 19.8711 213.016 15.4464 213.016 9.98828C213.016 4.48053 208.551 0.015625 203.043 0.015625H163.961H148.906C130.129 0.015625 114.906 15.2379 114.906 34.0156V78Z" fill="white"/>
            </svg>
            <div className="flex text-white gap-10">
                <div>
                    <h3 className="font-bold text-xl">About</h3>
                    <p>About Us</p>
                    <p>News & Blog</p>
                    <p>Location</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl">Products</h3>
                    <p>Pricing</p>
                    <p>Store</p>
                    <p>Features</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl">Discover</h3>
                    <p>Contact Us</p>
                    <p>Customers</p>
                    <p>Affiliates</p>
                </div>
            </div>
        </div>
        <div className="mx-10 flex gap-10 pb-10 transition-all duration-300">
            <img className="hover:scale-125" src="/icons/insta.png" alt="instagram"/>
            <img className="hover:scale-125"  src="/icons/whatsapp.png" alt="whatsapp"/>
            <img className="hover:scale-125"  src="/icons/x.png" alt="x" />
        </div>
    </div>
  )
}

export default footer