import React from "react";
import {Link} from "react-router-dom";
import style from './Header.module.scss';

const token: boolean = true;

class Header extends React.Component<any, {pageUrl: string}> {
    constructor(props: any) {
        super(props);
        this.state = {
            pageUrl: window.location.pathname,
        }
    }

    withOutToken = () => {
        if (this.state.pageUrl !== "/" && this.state.pageUrl !== "/sing_in" && this.state.pageUrl !== "/sing_up"){
            window.location.href = "/";
        }
        return (
            <>
                <Link to={'/sing_in'}>Sing In</Link>
                <Link to={'/sing_up'}>Sing Up</Link>
            </>
        );
    }

    withToken = () => {
        this.setState({pageUrl: window.location.pathname});

        if (this.state.pageUrl === "/") {
            return (
                // <a href={"/main_page"}>Go to main page</a>
                <Link to={"/main_page"}>Go to main page</Link>
            );
        } else {
            return (
                <>
                    <Link to={"/create_new_board"} id={style.new_board}>Create new board</Link>
                    <Link to={'/edit_profile'} id={style.edit_profile}>Edit Profile</Link>
                    <Link to={"/sing_out"} id={style.sing_out}>Sing Out</Link>
                </>
            );
        }
    }

    render() {
        return (
            <header className={this.props.checkScrollTop > 0 ? style.scroll : ""}>
                <div className="App-logo">
                    <a href={
                        token ? "/main_page" : "/"
                    }>
                        <svg className="icon-logo-svg" width="194" height="29" viewBox="0 0 194 29" fill="none">
                            <path
                                d="M21.5394 7.47323L25.3504 7.49564V9.41079C25.3504 16.0503 23.2391 17.9854 22.5388 18.6254C20.4224 20.5655 16.5092 21.5492 10.9039 21.5517L7.098 21.5193V19.5992C7.098 12.9622 9.20925 11.0271 9.90959 10.3846C12.0132 8.45446 15.9366 7.47323 21.5394 7.47323ZM21.5598 0.5C6.32353 0.5 0.015336 6.92533 0.015336 19.5992L0 28.5H10.8834C26.1197 28.5 32.4305 22.0747 32.4305 9.39585L32.4611 0.5H21.5598Z"
                                fill="white"></path>
                            <path
                                d="M43.135 2.85595H46.8795V6.50445H43.135V2.85595ZM43.2295 9.62995H46.8079V26.1515H43.2295V9.62995Z"
                                fill="white"></path>
                            <path
                                d="M52.2522 4.69639H55.8306V9.62995H60.117V12.4541H55.8383V20.4808C55.8383 21.6231 56.0223 22.425 56.3904 22.8866C56.7559 23.3473 57.4128 23.5764 58.3866 23.5764C58.701 23.5764 59.0588 23.5615 59.4575 23.5291C59.7984 23.5092 60.1361 23.4532 60.4646 23.3622V26.3034C60.0711 26.4002 59.6715 26.4718 59.2684 26.5176C58.7777 26.5799 58.2833 26.6107 57.7885 26.6098C55.8817 26.6098 54.4819 26.1042 53.589 25.0931C52.6961 24.082 52.2505 22.6774 52.2522 20.8793V4.69639Z"
                                fill="white"></path>
                            <path
                                d="M64.5568 9.62995H68.1352V12.1752C68.684 11.315 69.4195 10.5822 70.2899 10.0284C71.217 9.46094 72.2957 9.17327 73.3903 9.20159V12.6035C73.2625 12.5836 73.1347 12.5687 73.012 12.5562C72.8893 12.5438 72.7564 12.5413 72.603 12.5413C72.0087 12.5389 71.4218 12.6702 70.888 12.9248C70.3557 13.1792 69.8798 13.5329 69.4873 13.9658C69.0739 14.4323 68.7493 14.967 68.5288 15.5447C68.2806 16.193 68.1475 16.8777 68.1352 17.5695V26.1515H64.5568V9.62995Z"
                                fill="white"></path>
                            <path
                                d="M94.2344 9.62995H97.8128V11.7443C98.3742 10.9725 99.1118 10.3383 99.9675 9.89144C100.935 9.40903 102.012 9.17179 103.099 9.20159C105.174 9.20159 106.708 9.78851 107.699 10.9623C108.691 12.1362 109.189 13.8072 109.192 15.9756V26.1515H105.614V16.648C105.614 15.1537 105.258 14.0746 104.545 13.4104C104.202 13.0804 103.794 12.8209 103.346 12.6472C102.897 12.4735 102.418 12.3892 101.936 12.3993C101.398 12.3946 100.864 12.4875 100.361 12.6733C99.8831 12.8579 99.4483 13.1349 99.0831 13.4876C98.6909 13.8651 98.3852 14.3192 98.186 14.82C97.9558 15.3969 97.8329 16.0092 97.823 16.6281V26.1515H94.2446L94.2344 9.62995Z"
                                fill="white"></path>
                            <path
                                d="M130.555 2.85595H134.297V6.50445H130.555V2.85595ZM130.65 9.62995H134.228V26.1515H130.65V9.62995Z"
                                fill="white"></path>
                            <path
                                d="M139.716 4.69639H143.294V9.62995H147.573V12.4541H143.302V20.4808C143.302 21.6231 143.485 22.425 143.851 22.8866C144.219 23.3473 144.874 23.5764 145.85 23.5764C146.165 23.5764 146.52 23.5615 146.919 23.5291C147.259 23.5094 147.597 23.4534 147.926 23.3622V26.3034C147.532 26.4005 147.133 26.472 146.729 26.5176C146.24 26.58 145.746 26.6108 145.252 26.6098C143.342 26.6098 141.942 26.1042 141.053 25.0931C140.163 24.082 139.717 22.6774 139.716 20.8793V4.69639Z"
                                fill="white"></path>
                            <path
                                d="M152.112 2.85595H155.857V6.50445H152.112V2.85595ZM152.207 9.62995H155.785V26.1515H152.207V9.62995Z"
                                fill="white"></path>
                            <path
                                d="M159.607 16.8946C159.583 15.7534 159.786 14.6186 160.205 13.5524C160.568 12.6425 161.132 11.8213 161.856 11.1466C162.573 10.4959 163.423 10.0003 164.35 9.69221C165.336 9.35647 166.374 9.18799 167.418 9.19412C168.457 9.18712 169.489 9.35565 170.47 9.69221C171.388 10.0041 172.229 10.4995 172.939 11.1466C173.664 11.8238 174.232 12.644 174.605 13.5524C175.034 14.6162 175.242 15.752 175.219 16.8946V18.9292C175.242 20.0718 175.034 21.2076 174.605 22.2714C174.226 23.1735 173.655 23.9868 172.928 24.6573C172.218 25.3044 171.377 25.7998 170.459 26.1117C169.479 26.447 168.447 26.6155 167.407 26.6098C166.363 26.6145 165.326 26.446 164.34 26.1117C163.416 25.8023 162.57 25.3067 161.856 24.6573C161.132 23.9826 160.568 23.1614 160.205 22.2515C159.789 21.1915 159.586 20.0637 159.607 18.9292V16.8946ZM163.254 19.0089C163.254 20.5414 163.631 21.7036 164.386 22.4956C165.141 23.2875 166.152 23.6885 167.418 23.6984C168.675 23.6984 169.681 23.3 170.436 22.503C171.191 21.7061 171.569 20.5439 171.571 19.0164V16.8024C171.571 15.2716 171.193 14.1019 170.436 13.2934C169.68 12.4848 168.673 12.0814 167.418 12.083C166.16 12.083 165.153 12.4865 164.396 13.2934C163.64 14.1003 163.262 15.27 163.264 16.8024L163.254 19.0089Z"
                                fill="white"></path>
                            <path
                                d="M179.022 9.62995H182.6V11.7443C183.162 10.9725 183.899 10.3383 184.755 9.89144C185.723 9.40883 186.799 9.17157 187.886 9.20159C189.962 9.20159 191.495 9.78851 192.487 10.9623C193.479 12.1362 193.983 13.8072 194 15.9756V26.1515H190.422V16.648C190.422 15.1537 190.065 14.0745 189.353 13.4104C189.009 13.0802 188.601 12.8206 188.152 12.6469C187.704 12.4732 187.224 12.389 186.741 12.3993C186.204 12.3948 185.671 12.4877 185.169 12.6733C184.691 12.8585 184.257 13.1354 183.891 13.4876C183.5 13.8659 183.196 14.3198 182.996 14.82C182.765 15.3966 182.642 16.009 182.633 16.6281V26.1515H179.055L179.022 9.62995Z"
                                fill="white"></path>
                            <path
                                d="M126.289 19.0861C126.05 18.5329 125.684 18.0399 125.221 17.6442C124.745 17.255 124.194 16.9636 123.6 16.7875C122.925 16.5851 122.229 16.4564 121.525 16.4039L119.541 16.2196C119.141 16.2009 118.743 16.1602 118.348 16.0976C117.998 16.0441 117.659 15.9409 117.341 15.7913C117.062 15.6589 116.819 15.4644 116.633 15.2235C116.441 14.9489 116.347 14.621 116.364 14.2896C116.351 13.9617 116.431 13.6366 116.594 13.3498C116.758 13.063 116.999 12.8255 117.292 12.6633C117.911 12.2964 118.797 12.1129 119.95 12.1129C121.625 12.148 123.276 12.5069 124.807 13.1689L125.901 10.4294C125.049 9.99963 124.14 9.6894 123.199 9.50792C122.051 9.27512 120.88 9.16159 119.707 9.16922C118.862 9.16434 118.02 9.26392 117.2 9.46558C116.429 9.65587 115.698 9.97798 115.043 10.4169C114.426 10.8334 113.911 11.3777 113.535 12.0108C113.143 12.6948 112.947 13.469 112.967 14.2522C112.942 15.0261 113.093 15.7959 113.409 16.506C113.674 17.0743 114.072 17.5736 114.572 17.963C115.064 18.3341 115.625 18.6098 116.224 18.7748C116.854 18.9513 117.503 19.059 118.159 19.0961L120.078 19.2804C120.872 19.2833 121.654 19.4721 122.358 19.8308C122.933 20.1595 123.222 20.7099 123.222 21.4869C123.241 21.8384 123.152 22.1874 122.966 22.4889C122.779 22.7903 122.504 23.0304 122.177 23.1779C121.313 23.5569 120.37 23.7351 119.424 23.6984C118.334 23.7045 117.249 23.5603 116.201 23.2701C115.553 23.087 114.917 22.8666 114.296 22.6101L113.231 25.2923C113.651 25.5148 114.094 25.6942 114.552 25.8278C115.053 25.9822 115.577 26.115 116.124 26.2262C116.671 26.3375 117.216 26.4205 117.76 26.4753C118.269 26.5349 118.781 26.5657 119.293 26.5674C120.172 26.5653 121.047 26.4676 121.903 26.276C122.744 26.0979 123.548 25.7822 124.28 25.3421C124.975 24.92 125.566 24.3537 126.011 23.6835C126.476 22.942 126.711 22.0845 126.685 21.2155C126.706 20.4866 126.571 19.7616 126.289 19.0861Z"
                                fill="white"></path>
                            <path
                                d="M89.5339 12.8625C89.3205 12.0786 88.9032 11.3615 88.3224 10.7805C87.7111 10.2061 86.9586 9.79448 86.137 9.58512C85.06 9.30776 83.9484 9.17866 82.8347 9.20159C82.0679 9.20159 80.3681 9.32113 79.1949 9.72957C78.2859 10.0103 77.4245 10.4207 76.6389 10.9474L77.6613 13.5026C78.1588 13.1832 78.6933 12.9223 79.2537 12.7256C80.1968 12.4236 81.1853 12.2788 82.1778 12.2972C82.8998 12.2738 83.6212 12.3578 84.3172 12.5463C84.8036 12.6733 85.2406 12.9374 85.5735 13.3056C85.9064 13.6738 86.1202 14.1296 86.1881 14.6158C86.2896 15.2033 86.3375 15.7983 86.3313 16.394V16.6082H82.8347C80.4218 16.6082 78.6284 17.0116 77.4543 17.8185C76.2803 18.6254 75.6932 19.9487 75.6932 21.7883C75.6932 23.3008 76.1601 24.4804 77.0939 25.3272C78.0277 26.1739 79.448 26.5981 81.3548 26.5998C83.6194 26.5998 85.2765 25.8435 86.3262 24.331V26.1515H89.9046V15.8834C89.9265 14.8645 89.8017 13.8477 89.5339 12.8625ZM86.3262 20.1745C86.3302 20.7353 86.2018 21.2896 85.951 21.7944C85.7001 22.2992 85.3335 22.741 84.8795 23.0858C84.4805 23.3719 84.0255 23.5754 83.5427 23.6835C83.0628 23.7944 82.5713 23.8513 82.0781 23.8528C80.1713 23.8528 79.2171 23.1273 79.2154 21.6762C79.2042 21.2748 79.2683 20.8747 79.4045 20.4957C79.5256 20.1869 79.7462 19.9247 80.0333 19.7486C80.3916 19.5433 80.7875 19.408 81.1988 19.3501C81.8027 19.2608 82.4131 19.22 83.0238 19.2281H86.3262V20.1745Z"
                                fill="white"></path>
                        </svg>
                    </a>
                </div>
                <nav>
                    {
                        token ? this.withToken() : this.withOutToken()
                    }
                </nav>
            </header>
        );
    }
}

export default Header;