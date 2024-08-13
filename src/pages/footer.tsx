export default function Footer() {
    return (
        <>
            <footer className="container-fluid py-10 px-5 text-center sm:text-left">
                <div className="row flex">
                    <div className="col-lg-3">
                        <h1 className="font-bold text-lg">About</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum aut voluptates, impedit aperiam obcaecati ipsam quae provident eius corrupti ad saepe hic iste rem? Autem deserunt earum amet et!</p>
                    </div>
                    <div className="col-lg-3">
                        <h1 className="font-bold text-lg">Quick links</h1>
                        <ul>
                            <li className="hover:text-slate-900"><a href="#">Home</a></li>
                            <li className="hover:text-slate-900"><a href="#">About</a></li>
                            <li className="hover:text-slate-900"><a href="#">Blog</a></li>
                            <li className="hover:text-slate-900"><a href="#">Archived</a></li>
                            <li className="hover:text-slate-900"><a href="#">Author</a></li>
                            <li className="hover:text-slate-900"><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h1 className="font-bold text-lg">Category</h1>
                        <ul>
                            <li className="hover:text-slate-900"><a href="#">Lifestyle</a></li>
                            <li className="hover:text-slate-900"><a href="#">Technology</a></li>
                            <li className="hover:text-slate-900"><a href="#">Travel</a></li>
                            <li className="hover:text-slate-900"><a href="#">Business</a></li>
                            <li className="hover:text-slate-900"><a href="#">Economy</a></li>
                            <li className="hover:text-slate-900"><a href="#">Sports</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <div className="bg-white w-full space-y-2 text-center py-7 px-4 shadow">
                            <h1>Weekly Newsletter</h1>
                            <h4>Get blog articles and others via mail</h4>
                            <label className="relative block">
                                <span className="sr-only">Mail</span>
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <i className="fa-solid fa-envelope"></i>
                                </span>
                                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm  focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Your email" type="email" name="search" />
                            </label>
                            <button type="submit" className="bg-blue-500 py-1 px-1 w-full text-white rounded-md hover:bg-blue-600 transform transition duration-500 hover:scale-110">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="end-footer flex justify-between pt-5">
                    <div className="copyright">
                        <h5>Voldeblog</h5>
                        <span>© volde@2024 All rights reserved</span>
                    </div>
                    <div className="cookies flex space-x-10 mt-5 sm:mt-0">
                        <h5><a href="#">Terms of Use</a></h5>
                        <h5><a href="#">Privacy policy</a></h5>
                        <h5><a href="#">Cookie policy</a></h5>
                    </div>
                </div>
            </footer>
        </>
    );
};
