import React from 'react';

const Header = () => {
    return (
    <header
    className='h-96 bg-cover bg-center flex items-center justify-center'
    style={{
        backgroundImage: 
        "url('https://t3.ftcdn.net/jpg/05/75/29/44/360_F_575294471_Lp0QLdUiOT9fzChgha6RfhMa9FmfNHDg.jpg')",
    }}>
        <h1 className="text-4xl font-bold bg-white/50 rounded-lg  backdrop-blur-sm p-4">
            🚀Welcome to My Website</h1>
    </header>
    );
};
export default Header;