import * as React from 'react';
import admin from '../img/e7ea5bdbee1c7e6d2f0517eb9dfd5595.jpg'
import { Helmet } from "react-helmet";
import OwlCarousel from 'react-owl-carousel';


function Home(props) {
    const data = props.user
    const carouselData = props.carousel
    const loading = props.loading

    var options1 = {
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        navText: ['<i class="mdicon mdicon-arrow_back"></i>', '<i class="mdicon mdicon-arrow_forward"></i>'],
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1,
            },
        }
    }

    var options2 = {
        items: 2,
        loop: true,
        nav: true,
        dots: true,
        autoWidth: true,
        smartSpeed: 700,
        margin: 0,
        autoplay: true,
        navText: ['<i class="mdicon mdicon-arrow_back"></i>', '<i class="mdicon mdicon-arrow_forward"></i>'],
        responsive: {
            0: {
                items: 1,
                autoWidth: false,
            },
            768: {
                margin: 0,
                autoWidth: true,
            },
            992: {
                margin: 0,
            },
            1200: {
                margin: 0,
            },
            1450: {
                margin: 0,
            },
            1500: {
                margin: 0,
            },
            1671: {
                margin: 0,
            },
        },
    }

    var options3 = {
        margin: 30,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="21" height="14.733" viewBox="0 0 21 14.733"><defs><style>.a{opacity:0.4;}.b{fill:none;stroke:#111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style></defs><g class="a" transform="translate(21 17.533) rotate(180)"><line class="b" x2="20" transform="translate(0.5 10.167)"/><path class="b" d="M10.5,3.5l5,6.667-5,6.667" transform="translate(5 0)"/></g></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="14.733" viewBox="0 0 21 14.733"><defs><style>.a{fill:none;stroke:#222;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style></defs><g transform="translate(0 -2.8)"><line class="a" x2="20" transform="translate(0.5 10.167)"/><path class="a" d="M10.5,3.5l5,6.667-5,6.667" transform="translate(5 0)"/></g></svg>'],
        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 2,
            },

            992: {
                items: 3,
            },
        },
    }

    return (
        <>
            {loading ? <div class="d-flex justify-content-center my-5">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div> :
                <div id="site-content" className="site-content">
                    <div id="atbs_feature_slider_4-623810b590844" className="atbs-block atbs-block--fullwidth atbs-block-custom-margin atbs-feature-slider-d atbs-block--contiguous">
                        <div className="atbs-block__inner">

                            <OwlCarousel {...options1} id="atbs_carousel-623810b590f10" className="owl-refresh owl-theme owl-carousel js-atbs-carousel-only-1i-loop atbs-carousel dots-circle nav-circle">
                                {
                                    carouselData.map((curValue, index) => {
                                        if (carouselData.length > 1) {
                                            return (
                                                <div className="slide-content item" key={index}>
                                                    <article className="post post--vertical post--vertical-text-wrap post__thumb-700" data-dark-mode="true">
                                                        <div className="post__thumb atbs-thumb-object-fit">
                                                            <a href=""><img width={1920} height={1125} src={curValue.PostThumbUrl} className="attachment-atbs-xxl size-atbs-xxl wp-post-image" alt="" /></a>

                                                        </div>
                                                        <div className="post__text">
                                                            <div className="post__meta post-time-cat-wrap">
                                                                <a className="cat-6 post__cat post__cat--bg cat-theme-bg" href="https://atom.bk-ninja.com/technology/category/laptop/tips/">Tips</a>
                                                                <span className="time-wrap"><time className="time published" dateTime="2019-10-29T10:46:00+00:00" title="October 29, 2019 at 10:46 am">October 29, 2019</time></span>
                                                            </div>
                                                            <div className="post__text--wrap flexbox clearfix">
                                                                <h3 className="post__title typescale-3_5 line-limit-child line-limit-3">
                                                                    <a href=""></a>
                                                                </h3>
                                                                <div className="post__excerpt  flexbox__item">
                                                                    <div className="excerpt">{curValue.PostTitle}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                    <div id="atbs_posts_grid_3-623810b591e7d" className="atbs-block atbs-block--fullwidth atbs-block-custom-margin atbs-post--grid-c ">
                        <div className="container">
                            <div className="block-heading block-heading--style-1 block-heading--has-button">
                                <h4 className="block-heading__title">Recent Post</h4><a href="#" target="_blank" className="view-all-btn">See all</a>
                            </div>
                        </div>{/* .container */}
                        <div className="container">
                            <div className="atbs-block__inner">
                                <div className="posts-list">
                                    <div className="list-item">
                                        <article className="post post--no-thumb post-no-thumb-not-readmore hover-text-color-white" data-dark-mode="true">
                                            <div className="post__text">
                                                <div className="post__meta post-time-cat-wrap">
                                                    <a className="cat-4 post__cat post__cat--bg cat-theme-bg" href="https://atom.bk-ninja.com/technology/category/laptop/">Laptop</a>
                                                    <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:41:13+00:00" title="October 18, 2019 at 8:41 am">October 18, 2019</time></span>
                                                </div>
                                                <h3 className="post__title typescale-1 line-limit-child line-limit-3">
                                                    <a href="https://atom.bk-ninja.com/technology/choosing-my-own-adventure/">Every
                                                        Next Level of Your Life Will Demand a Different You</a>
                                                </h3>
                                                <div className="post__meta">
                                                    <div className="entry-author entry-author-has-avatar post-author author-circle">
                                                        <a className="post-author__avatar" href="https://atom.bk-ninja.com/technology/author/admin/"><img alt="admin" src={admin} srcSet="https://secure.gravatar.com/avatar/e7ea5bdbee1c7e6d2f0517eb9dfd5595?s=100&d=mm&r=g 2x" className="avatar avatar-50 photo author-avatar" height={50} width={50} loading="lazy" /></a>
                                                        <div className="post-author__text">
                                                            <span className="hint-span">By</span><a className="post-author__name" href="https://atom.bk-ninja.com/technology/author/admin/">admin</a>
                                                        </div>
                                                    </div><span className="post__comment entry-comment"><a title="0 Comments" href="https://atom.bk-ninja.com/technology/choosing-my-own-adventure/"><i className="mdicon mdicon-comment-o" />0</a></span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>{/* .list-item */}
                                    <div className="list-item">
                                        <article className="post post--no-thumb post-no-thumb-not-readmore hover-text-color-white" data-dark-mode="true">
                                            <div className="post__text">
                                                <div className="post__meta post-time-cat-wrap">
                                                    <a className="cat-5 post__cat post__cat--bg cat-theme-bg" href="https://atom.bk-ninja.com/technology/category/review/">Review</a>
                                                    <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:37:03+00:00" title="October 18, 2019 at 8:37 am">October 18, 2019</time></span>
                                                </div>
                                                <h3 className="post__title typescale-1 line-limit-child line-limit-3">
                                                    <a href="https://atom.bk-ninja.com/technology/and-a-lonely-stranger-spoke-to-me/">And
                                                        a Lonely Stranger Has Spoke to Me Ever Since</a>
                                                </h3>
                                                <div className="post__meta">
                                                    <div className="entry-author entry-author-has-avatar post-author author-circle">
                                                        <a className="post-author__avatar" href="https://atom.bk-ninja.com/technology/author/admin/"><img alt="admin" src={admin} srcSet="https://secure.gravatar.com/avatar/e7ea5bdbee1c7e6d2f0517eb9dfd5595?s=100&d=mm&r=g 2x" className="avatar avatar-50 photo author-avatar" height={50} width={50} loading="lazy" /></a>
                                                        <div className="post-author__text">
                                                            <span className="hint-span">By</span><a className="post-author__name" href="https://atom.bk-ninja.com/technology/author/admin/">admin</a>
                                                        </div>
                                                    </div><span className="post__comment entry-comment"><a title="0 Comments" href="https://atom.bk-ninja.com/technology/and-a-lonely-stranger-spoke-to-me/"><i className="mdicon mdicon-comment-o" />0</a></span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>{/* .list-item */}
                                    <div className="list-item">
                                        <article className="post post--no-thumb post-no-thumb-not-readmore hover-text-color-white" data-dark-mode="true">
                                            <div className="post__text">
                                                <div className="post__meta post-time-cat-wrap">
                                                    <a className="cat-5 post__cat post__cat--bg cat-theme-bg" href="https://atom.bk-ninja.com/technology/category/review/">Review</a>
                                                    <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:35:58+00:00" title="October 18, 2019 at 8:35 am">October 18, 2019</time></span>
                                                </div>
                                                <h3 className="post__title typescale-1 line-limit-child line-limit-3">
                                                    <a href="https://atom.bk-ninja.com/technology/journey-through-the-sahara/">The
                                                        Scariest Moment is Always Just Before You Start</a>
                                                </h3>
                                                <div className="post__meta">
                                                    <div className="entry-author entry-author-has-avatar post-author author-circle">
                                                        <a className="post-author__avatar" href="https://atom.bk-ninja.com/technology/author/admin/"><img alt="admin" src={admin} srcSet="https://secure.gravatar.com/avatar/e7ea5bdbee1c7e6d2f0517eb9dfd5595?s=100&d=mm&r=g 2x" className="avatar avatar-50 photo author-avatar" height={50} width={50} loading="lazy" /></a>
                                                        <div className="post-author__text">
                                                            <span className="hint-span">By</span><a className="post-author__name" href="https://atom.bk-ninja.com/technology/author/admin/">admin</a>
                                                        </div>
                                                    </div><span className="post__comment entry-comment"><a title="0 Comments" href="https://atom.bk-ninja.com/technology/journey-through-the-sahara/"><i className="mdicon mdicon-comment-o" />0</a></span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>{/* .list-item */}
                                    <div className="list-item">
                                        <article className="post post--no-thumb post-no-thumb-not-readmore hover-text-color-white" data-dark-mode="true">
                                            <div className="post__text">
                                                <div className="post__meta post-time-cat-wrap">
                                                    <a className="cat-5 post__cat post__cat--bg cat-theme-bg" href="https://atom.bk-ninja.com/technology/category/review/">Review</a>
                                                    <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:30:33+00:00" title="October 18, 2019 at 8:30 am">October 18, 2019</time></span>
                                                </div>
                                                <h3 className="post__title typescale-1 line-limit-child line-limit-3">
                                                    <a href="https://atom.bk-ninja.com/technology/the-experts-guide-to-surviving-long-haul-flights/">The
                                                        Expert’s Guide to Surviving Long Haul Flights</a>
                                                </h3>
                                                <div className="post__meta">
                                                    <div className="entry-author entry-author-has-avatar post-author author-circle">
                                                        <a className="post-author__avatar" href="https://atom.bk-ninja.com/technology/author/admin/"><img alt="admin" src={admin} srcSet="https://secure.gravatar.com/avatar/e7ea5bdbee1c7e6d2f0517eb9dfd5595?s=100&d=mm&r=g 2x" className="avatar avatar-50 photo author-avatar" height={50} width={50} loading="lazy" /></a>
                                                        <div className="post-author__text">
                                                            <span className="hint-span">By</span><a className="post-author__name" href="https://atom.bk-ninja.com/technology/author/admin/">admin</a>
                                                        </div>
                                                    </div><span className="post__comment entry-comment"><a title="0 Comments" href="https://atom.bk-ninja.com/technology/the-experts-guide-to-surviving-long-haul-flights/"><i className="mdicon mdicon-comment-o" />0</a></span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>{/* .list-item */}
                                </div>{/* .posts-list */}
                            </div>{/* .atbs-block__inner */}
                        </div>{/* .container */}
                    </div>{/* .atbs-block */}
                    <div id="atbs_posts_grid_7-623810b5931b9" className="atbs-block atbs-block--fullwidth atbs-block-custom-margin atbs-post--grid-g  atbs-block--has-bg">
                        <div className="container">
                            <div className="atbs-block__inner">
                                <div className="post-main">
                                    <div className="list-item">
                                        <article className="post post--horizontal post--horizontal-video-text-top-right post__thumb-465 clearfix" data-dark-mode="true">
                                            <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                                <a href="https://atom.bk-ninja.com/technology/the-tattoo-taboo-for-the-asian-woman/"><img width={800} height={600} src="assets/img/13-800x600.jpg" className="attachment-atbs-m-4_3 size-atbs-m-4_3 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-800x600.jpg 800w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-300x225.jpg 300w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-1024x769.jpg 1024w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-768x577.jpg 768w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-1536x1154.jpg 1536w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-180x135.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-400x300.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-600x450.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-1200x900.jpg 1200w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-1600x1200.jpg 1600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13.jpg 1920w" sizes="(max-width: 800px) 100vw, 800px" /></a> {/* close a tag */}
                                            </div>
                                            <div className="post__text">
                                                <div className="post__meta post-time-cat-wrap">
                                                    <a className="cat-2 post__cat post__cat--bg cat-theme-bg" href="https://atom.bk-ninja.com/technology/category/news/">News</a>
                                                    <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:28:56+00:00" title="October 18, 2019 at 8:28 am">October 18, 2019</time></span>
                                                </div>
                                                <h3 className="post__title post__title typescale-3 line-limit-child line-limit-3">
                                                    <a href="https://atom.bk-ninja.com/technology/the-tattoo-taboo-for-the-asian-woman/">Keep
                                                        your eyes on the stars and your feet on the ground.</a>
                                                </h3>
                                            </div>
                                        </article>
                                    </div>{/* .list-item */}
                                </div>{/* .post-main */}
                                <div className="post-sub"><a className="posts-navigation__label" href="https://atom.bk-ninja.com/technology/the-tattoo-taboo-for-the-asian-woman/"><span>Next
                                    Article</span></a>
                                    <div className="list-item">
                                        <article className="post post--vertical post--vertical-video-small post__thumb-150" data-dark-mode="true">
                                            <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                                <a href="https://atom.bk-ninja.com/technology/impossibly-high-beauty-standards-are-ruining-my-self-esteem/"><img width={400} height={300} src="assets/img/4-400x300.jpg" className="attachment-atbs-xs-4_3 size-atbs-xs-4_3 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-400x300.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-180x135.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-600x450.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-800x600.jpg 800w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-1200x900.jpg 1200w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-1600x1200.jpg 1600w" sizes="(max-width: 400px) 100vw, 400px" /></a> {/* close a tag */}
                                            </div>
                                            <div className="post__text">
                                                <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                                    <a href="https://atom.bk-ninja.com/technology/impossibly-high-beauty-standards-are-ruining-my-self-esteem/">You
                                                        must be the change you wish to see in world.</a>
                                                </h3>
                                            </div>
                                        </article>
                                    </div>{/* .list-item */}
                                </div>{/* .post-sub */}
                            </div>{/* .atbs-block__inner */}
                        </div>{/* .container */}
                    </div>{/* .atbs-block */}
                    <div id="atbs_block_listing_grid_5-623810b593f2e" className="atbs-block atbs-block--fullwidth atbs-block-custom-margin atbs-post--listing-grid-5 atbs-post--listing-grid-5-no-sidebar ">
                        <div className="container">
                            <div className="atbs-block__inner">
                                <div className="posts-list flexbox-wrap flexbox-wrap-3i">
                                    <div className="list-item">
                                        <article className="post post--overlay post--overlay-style-card post--overlay-md post--overlay-padding-lg" data-dark-mode="true">
                                            <div className="post__thumb post__thumb--overlay background-img background-img--darkened post__thumb--overlay atbs-thumb-object-fit background-img-dots-circle">
                                                <a href="https://atom.bk-ninja.com/technology/adjusting-to-your-home-is-no-different-than-a-new-country/"><img width={600} height={600} src="assets/img/6-600x600.jpg" className="attachment-atbs-s-1_1 size-atbs-s-1_1 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/6-600x600.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/6-150x150.jpg 150w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/6-180x180.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/6-400x400.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/6-800x800.jpg 800w" sizes="(max-width: 600px) 100vw, 600px" /></a> {/* close a tag */}
                                            </div>
                                            <div className="post__text">
                                                <div className="post__text-wrap">
                                                    <div className="post__text-inner flexbox-wrap flexbox-wrap-direction-column">
                                                        <div className="post__meta date-stamp">
                                                            <a className="cat-5 post__cat cat-theme" href="https://atom.bk-ninja.com/technology/category/review/">Review</a>
                                                            <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:23:13+00:00" title="October 18, 2019 at 8:23 am">
                                                                18<span>Oct</span>
                                                            </time></span>
                                                        </div>
                                                        <h3 className="post__title typescale-2">
                                                            <a href="https://atom.bk-ninja.com/technology/adjusting-to-your-home-is-no-different-than-a-new-country/">Life
                                                                is short, and it is up to you to make it sweet</a>
                                                        </h3>
                                                        <div className="post__excerpt  ">
                                                            <div className="excerpt">Set to launch on the manufacturers new A330neo
                                                                aircraft ...</div>
                                                        </div>
                                                        <div className="post__readmore flexbox-space-y-bottom"><a href="https://atom.bk-ninja.com/technology/adjusting-to-your-home-is-no-different-than-a-new-country/" className="button__readmore"><span className="readmore__text">Read
                                                            more<i className="mdicon mdicon-navigate_next" /></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="https://atom.bk-ninja.com/technology/adjusting-to-your-home-is-no-different-than-a-new-country/" className="link-overlay" />
                                        </article>
                                    </div>{/* .list-item */}
                                    <div className="list-item">
                                        <article className="post post--overlay post--overlay-style-card post--overlay-md post--overlay-padding-lg" data-dark-mode="true">
                                            <div className="post__thumb post__thumb--overlay background-img background-img--darkened post__thumb--overlay atbs-thumb-object-fit background-img-dots-circle">
                                                <a href="https://atom.bk-ninja.com/technology/i-moved-across-the-country-and-never-looked-back/"><img width={600} height={600} src="assets/img/nikita-kostrykin-i1Q9pphrWUw-unsplash-600x600.jpg" className="attachment-atbs-s-1_1 size-atbs-s-1_1 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/nikita-kostrykin-i1Q9pphrWUw-unsplash-600x600.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/nikita-kostrykin-i1Q9pphrWUw-unsplash-150x150.jpg 150w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/nikita-kostrykin-i1Q9pphrWUw-unsplash-180x180.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/nikita-kostrykin-i1Q9pphrWUw-unsplash-400x400.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/nikita-kostrykin-i1Q9pphrWUw-unsplash-800x800.jpg 800w" sizes="(max-width: 600px) 100vw, 600px" /></a> {/* close a tag */}
                                            </div>
                                            <div className="post__text">
                                                <div className="post__text-wrap">
                                                    <div className="post__text-inner flexbox-wrap flexbox-wrap-direction-column">
                                                        <div className="post__meta date-stamp">
                                                            <a className="cat-4 post__cat cat-theme" href="https://atom.bk-ninja.com/technology/category/laptop/">Laptop</a>
                                                            <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:22:23+00:00" title="October 18, 2019 at 8:22 am">
                                                                18<span>Oct</span>
                                                            </time></span>
                                                        </div>
                                                        <h3 className="post__title typescale-2">
                                                            <a href="https://atom.bk-ninja.com/technology/i-moved-across-the-country-and-never-looked-back/">Life’s
                                                                too mysterious to take too serious.</a>
                                                        </h3>
                                                        <div className="post__excerpt  ">
                                                            <div className="excerpt">Set to launch on the manufacturers new A330neo
                                                                aircraft ...</div>
                                                        </div>
                                                        <div className="post__readmore flexbox-space-y-bottom"><a href="https://atom.bk-ninja.com/technology/i-moved-across-the-country-and-never-looked-back/" className="button__readmore"><span className="readmore__text">Read
                                                            more<i className="mdicon mdicon-navigate_next" /></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="https://atom.bk-ninja.com/technology/i-moved-across-the-country-and-never-looked-back/" className="link-overlay" />
                                        </article>
                                    </div>{/* .list-item */}
                                    <div className="list-item">
                                        <article className="post post--overlay post--overlay-style-card post--overlay-md post--overlay-padding-lg" data-dark-mode="true">
                                            <div className="post__thumb post__thumb--overlay background-img background-img--darkened post__thumb--overlay atbs-thumb-object-fit background-img-dots-circle">
                                                <a href="https://atom.bk-ninja.com/technology/no-fixed-abode-quitting-home-ownership/"><img width={600} height={600} src="assets/img/4-600x600.jpg" className="attachment-atbs-s-1_1 size-atbs-s-1_1 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-600x600.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-150x150.jpg 150w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-180x180.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-400x400.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-800x800.jpg 800w" sizes="(max-width: 600px) 100vw, 600px" /></a> {/* close a tag */}
                                            </div>
                                            <div className="post__text">
                                                <div className="post__text-wrap">
                                                    <div className="post__text-inner flexbox-wrap flexbox-wrap-direction-column">
                                                        <div className="post__meta date-stamp">
                                                            <a className="cat-5 post__cat cat-theme" href="https://atom.bk-ninja.com/technology/category/review/">Review</a>
                                                            <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:20:17+00:00" title="October 18, 2019 at 8:20 am">
                                                                18<span>Oct</span>
                                                            </time></span>
                                                        </div>
                                                        <h3 className="post__title typescale-2">
                                                            <a href="https://atom.bk-ninja.com/technology/no-fixed-abode-quitting-home-ownership/">No
                                                                Fixed Abode: Quitting Home Ownership</a>
                                                        </h3>
                                                        <div className="post__excerpt  ">
                                                            <div className="excerpt">Set to launch on the manufacturers new A330neo
                                                                aircraft ...</div>
                                                        </div>
                                                        <div className="post__readmore flexbox-space-y-bottom"><a href="https://atom.bk-ninja.com/technology/no-fixed-abode-quitting-home-ownership/" className="button__readmore"><span className="readmore__text">Read
                                                            more<i className="mdicon mdicon-navigate_next" /></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="https://atom.bk-ninja.com/technology/no-fixed-abode-quitting-home-ownership/" className="link-overlay" />
                                        </article>
                                    </div>{/* .list-item */}
                                    <div className="list-item">
                                        <article className="post post--overlay post--overlay-style-card post--overlay-md post--overlay-padding-lg" data-dark-mode="true">
                                            <div className="post__thumb post__thumb--overlay background-img background-img--darkened post__thumb--overlay atbs-thumb-object-fit background-img-dots-circle">
                                                <a href="https://atom.bk-ninja.com/technology/developing-self-control-through-the-wonders-of-intermittent-fasting/"><img width={600} height={600} src="assets/img/5-600x600.jpg" className="attachment-atbs-s-1_1 size-atbs-s-1_1 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/5-600x600.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/5-150x150.jpg 150w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/5-180x180.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/5-400x400.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/5-800x800.jpg 800w" sizes="(max-width: 600px) 100vw, 600px" /></a> {/* close a tag */}
                                            </div>
                                            <div className="post__text">
                                                <div className="post__text-wrap">
                                                    <div className="post__text-inner flexbox-wrap flexbox-wrap-direction-column">
                                                        <div className="post__meta date-stamp">
                                                            <a className="cat-4 post__cat cat-theme" href="https://atom.bk-ninja.com/technology/category/laptop/">Laptop</a>
                                                            <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:18:54+00:00" title="October 18, 2019 at 8:18 am">
                                                                18<span>Oct</span>
                                                            </time></span>
                                                        </div>
                                                        <h3 className="post__title typescale-2">
                                                            <a href="https://atom.bk-ninja.com/technology/developing-self-control-through-the-wonders-of-intermittent-fasting/">Developing
                                                                Self-Control Through The Wonders</a>
                                                        </h3>
                                                        <div className="post__excerpt  ">
                                                            <div className="excerpt">Set to launch on the manufacturers new A330neo
                                                                aircraft ...</div>
                                                        </div>
                                                        <div className="post__readmore flexbox-space-y-bottom"><a href="https://atom.bk-ninja.com/technology/developing-self-control-through-the-wonders-of-intermittent-fasting/" className="button__readmore"><span className="readmore__text">Read
                                                            more<i className="mdicon mdicon-navigate_next" /></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="https://atom.bk-ninja.com/technology/developing-self-control-through-the-wonders-of-intermittent-fasting/" className="link-overlay" />
                                        </article>
                                    </div>{/* .list-item */}
                                    <div className="list-item">
                                        <article className="post post--overlay post--overlay-style-card post--overlay-md post--overlay-padding-lg" data-dark-mode="true">
                                            <div className="post__thumb post__thumb--overlay background-img background-img--darkened post__thumb--overlay atbs-thumb-object-fit background-img-dots-circle">
                                                <a href="https://atom.bk-ninja.com/technology/the-argument-for-short-meditations/"><img width={600} height={600} src="assets/img/3-600x600.jpg" className="attachment-atbs-s-1_1 size-atbs-s-1_1 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/3-600x600.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/3-150x150.jpg 150w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/3-180x180.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/3-400x400.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/3-800x800.jpg 800w" sizes="(max-width: 600px) 100vw, 600px" /></a> {/* close a tag */}
                                            </div>
                                            <div className="post__text">
                                                <div className="post__text-wrap">
                                                    <div className="post__text-inner flexbox-wrap flexbox-wrap-direction-column">
                                                        <div className="post__meta date-stamp">
                                                            <a className="cat-3 post__cat cat-theme" href="https://atom.bk-ninja.com/technology/category/build-pc/">Build
                                                                PC</a> <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:17:57+00:00" title="October 18, 2019 at 8:17 am">
                                                                    18<span>Oct</span>
                                                                </time></span>
                                                        </div>
                                                        <h3 className="post__title typescale-2">
                                                            <a href="https://atom.bk-ninja.com/technology/the-argument-for-short-meditations/">The
                                                                Argument For Short Meditations</a>
                                                        </h3>
                                                        <div className="post__excerpt  ">
                                                            <div className="excerpt">Set to launch on the manufacturers new A330neo
                                                                aircraft ...</div>
                                                        </div>
                                                        <div className="post__readmore flexbox-space-y-bottom"><a href="https://atom.bk-ninja.com/technology/the-argument-for-short-meditations/" className="button__readmore"><span className="readmore__text">Read
                                                            more<i className="mdicon mdicon-navigate_next" /></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="https://atom.bk-ninja.com/technology/the-argument-for-short-meditations/" className="link-overlay" />
                                        </article>
                                    </div>{/* .list-item */}
                                    <div className="list-item">
                                        <article className="post post--overlay post--overlay-style-card post--overlay-md post--overlay-padding-lg" data-dark-mode="true">
                                            <div className="post__thumb post__thumb--overlay background-img background-img--darkened post__thumb--overlay atbs-thumb-object-fit background-img-dots-circle">
                                                <a href="https://atom.bk-ninja.com/technology/do-you-want-stronger-friendships-a-more-balanced-mindset/"><img width={600} height={600} src="assets/img/2-600x600.jpg" className="attachment-atbs-s-1_1 size-atbs-s-1_1 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/2-600x600.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/2-150x150.jpg 150w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/2-180x180.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/2-400x400.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/2-800x800.jpg 800w" sizes="(max-width: 600px) 100vw, 600px" /></a> {/* close a tag */}
                                            </div>
                                            <div className="post__text">
                                                <div className="post__text-wrap">
                                                    <div className="post__text-inner flexbox-wrap flexbox-wrap-direction-column">
                                                        <div className="post__meta date-stamp">
                                                            <a className="cat-4 post__cat cat-theme" href="https://atom.bk-ninja.com/technology/category/laptop/">Laptop</a>
                                                            <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:16:49+00:00" title="October 18, 2019 at 8:16 am">
                                                                18<span>Oct</span>
                                                            </time></span>
                                                        </div>
                                                        <h3 className="post__title typescale-2">
                                                            <a href="https://atom.bk-ninja.com/technology/do-you-want-stronger-friendships-a-more-balanced-mindset/">Do
                                                                You Want Stronger Friendships</a>
                                                        </h3>
                                                        <div className="post__excerpt  ">
                                                            <div className="excerpt">Set to launch on the manufacturers new A330neo
                                                                aircraft ...</div>
                                                        </div>
                                                        <div className="post__readmore flexbox-space-y-bottom"><a href="https://atom.bk-ninja.com/technology/do-you-want-stronger-friendships-a-more-balanced-mindset/" className="button__readmore"><span className="readmore__text">Read
                                                            more<i className="mdicon mdicon-navigate_next" /></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="https://atom.bk-ninja.com/technology/do-you-want-stronger-friendships-a-more-balanced-mindset/" className="link-overlay" />
                                        </article>
                                    </div>{/* .list-item */}
                                </div>{/* .posts-list */}
                            </div>{/* .atbs-block__inner */}
                        </div>{/* .container */}
                    </div>{/* .atbs-block */}
                    <div id="atbs_feature_slider_3-623810b596cbc" className="atbs-block atbs-block--fullwidth atbs-block-custom-margin atbs-feature-slider-c ">
                        <div className="atbs-block__inner">
                            <OwlCarousel {...options2} id="atbs_carousel-623810b5973c6" className="owl-carousel js-carousel-2i-auto-width atbs-carousel dots-circle">
                                {
                                    carouselData.map((curValue, index) => {
                                        return (
                                            <div className="slide-content" key={index}>
                                                <article className="post post--horizontal post--horizontal-fullwidth-large" data-dark-mode="true">
                                                    <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                                        <a href="https://atom.bk-ninja.com/technology/the-next-big-thing-in-fashion-not-washing-your-clothes/"><img width={1920} height={1125} src={curValue.PostThumbUrl} className="attachment-atbs-xxl size-atbs-xxl wp-post-image" alt="" /></a> {/* close a tag */}
                                                    </div>
                                                    <div className="post__text">
                                                        <div className="post__meta post-time-cat-wrap">
                                                            <a className="cat-7 post__cat post__cat--bg cat-theme-bg" href="https://atom.bk-ninja.com/technology/category/laptop/fashion/">Fashion</a>
                                                            <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:15:15+00:00" title="October 18, 2019 at 8:15 am">October 18, 2019</time></span>
                                                        </div>
                                                        <h3 className="post__title typescale-4 line-limit-child line-limit-3">
                                                            <a href="https://atom.bk-ninja.com/technology/the-next-big-thing-in-fashion-not-washing-your-clothes/">{curValue.PostTitle}</a>
                                                        </h3>
                                                        <div className="post__excerpt  flexbox__item">
                                                            <div className="excerpt">Set to launch on the manufacturers new A330neo aircraft in
                                                                2017, its offering lots of ...</div>
                                                        </div>
                                                        <div className="post__readmore"><a href="https://atom.bk-ninja.com/technology/the-next-big-thing-in-fashion-not-washing-your-clothes/" className="button__readmore"><span className="readmore__text">Read more<i className="mdicon mdicon-navigate_next" /></span></a></div>
                                                    </div>
                                                </article>
                                            </div>
                                        )
                                    })
                                }
                            </OwlCarousel>{/* .atbs-carousel */}
                        </div>{/* .atbs-block__inner */}
                    </div>{/* .atbs-block */}
                    <div id="atbs_posts_carousel_1-623810b59846c" className="atbs-block atbs-block--fullwidth atbs-block-custom-margin atbs-carousel-grid " style={{ postBackgroundColor: '#2a2a2a' }}>
                        <div className="container">
                            <div className="block-heading block-heading--style-1 block-heading--has-button">
                                <h4 className="block-heading__title">Most Post</h4><a href="#" target="_blank" className="view-all-btn">See all</a>
                            </div>
                        </div>{/* .container */}
                        <div className="container">
                            <div className="atbs-block__inner">
                                <OwlCarousel {...options3} id="atbs_carousel-623810b598c3a" className="owl-carousel js-carousel-3i30m-nav-svg atbs-carousel dots-circle">
                                    {carouselData.map((curValue, index) => {
                                        return (
                                            <div className="slide-content" key={index} tabIndex={0}>
                                                <article className="post post--overlay post--overlay-background-hover post-thumb-radius post--overlay-height-270" data-dark-mode="false">
                                                    <div className="post__thumb post__thumb--overlay atbs-thumb-object-fit post-thumb-radius background-img background-img--darkened background-img-dots-circle">
                                                        <a href="https://atom.bk-ninja.com/technology/the-4-convolutional-neural-network-models-that-can-classify-your-fashion-images/"><img width={600} height={450} src={curValue.PostThumbUrl} className="attachment-atbs-s-4_3 size-atbs-s-4_3 wp-post-image" alt="" sizes="(max-width: 600px) 100vw, 600px" /></a>
                                                    </div>
                                                    <div className="post__text inverse-text">
                                                        <div className="post__text-wrap">
                                                            <div className="post__text-inner">
                                                                <div className="post__meta post-time-cat-wrap">
                                                                    <a className="cat-7 post__cat post__cat--bg cat-theme-bg" href="https://atom.bk-ninja.com/technology/category/laptop/fashion/">Fashion</a>
                                                                    <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:10:33+00:00" title="October 18, 2019 at 8:10 am">October 18,
                                                                        2019</time></span>
                                                                </div>
                                                                <h3 className="post__title typescale-2 custom-typescale-2 line-limit-child line-limit-3">
                                                                    <a href="https://atom.bk-ninja.com/technology/the-4-convolutional-neural-network-models-that-can-classify-your-fashion-images/">{curValue.PostTitle}</a>
                                                                </h3>
                                                                <div className="post__footer">
                                                                    <div className="post__meta">
                                                                        <div className="post-author post-author--style-1">
                                                                            <div className="post-author__text">
                                                                                <span className="hint-span">By</span>
                                                                                <a className="post-author__name" href="https://atom.bk-ninja.com/technology/author/admin/">admin</a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="post__readmore post__readmore-right icon-circle-50">
                                                                            <a href="https://atom.bk-ninja.com/technology/the-4-convolutional-neural-network-models-that-can-classify-your-fashion-images/" className="button__readmore">
                                                                                <span className="readmore__text">Read more <i className="mdicon mdicon-navigate_next" /></span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a href="https://atom.bk-ninja.com/technology/the-4-convolutional-neural-network-models-that-can-classify-your-fashion-images/" className="link-overlay" />
                                                </article>
                                            </div>
                                        )
                                    }
                                    )}
                                </OwlCarousel>

                            </div>
                        </div>{/* .container */}
                    </div>{/* .atbs-block */}
                    <div className="atbs-layout-split atbs-block atbs-block--fullwidth">
                        <div className="container">
                            <div className="row">
                                <div className="atbs-main-col " role="main">
                                    <div id="atbs_block_listing_grid_1_has_sidebar-623810b599cb2" className="atbs-block atbs-block-custom-margin listing-grid-1-has-sidebar ">
                                        <div className="atbs-block__inner">
                                            <div className="posts-list posts-list-2i flexbox-wrap flexbox-wrap-2i flex-space-30">
                                                {
                                                    data.map((curValue) => {
                                                        return (

                                                            <div className="list-item" key={curValue.ID}>
                                                                <article className="post post--vertical post--vertical-medium post__thumb-250 disable-thumb-placeholder" data-dark-mode="true">
                                                                    <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                                                        <a href="https://atom.bk-ninja.com/technology/want-to-strengthen-your-relationship-embrace-the-little-things/"><img width={400} height={300} src={curValue.PostThumbUrl} className="attachment-atbs-xs-4_3 size-atbs-xs-4_3 wp-post-image" alt="" sizes="(max-width: 400px) 100vw, 400px" /></a>
                                                                        {/* close a tag */}
                                                                    </div>
                                                                    <div className="post__text">
                                                                        <div className="post__meta post-time-cat-wrap">
                                                                            <a className="cat-2 post__cat post__cat--bg cat-theme-bg" href="https://atom.bk-ninja.com/technology/category/news/">News</a>
                                                                            <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:02:29+00:00" title="October 18, 2019 at 8:02 am">October 18,
                                                                                2019</time></span>
                                                                        </div>
                                                                        <h3 className="post__title typescale-2 line-limit-child line-limit-3">
                                                                            <a href="https://atom.bk-ninja.com/technology/want-to-strengthen-your-relationship-embrace-the-little-things/">If
                                                                                {curValue.PostTitle}</a>
                                                                        </h3>
                                                                        <div className="post__excerpt ">
                                                                            <div className="excerpt">Set to launch on the manufacturers new
                                                                                A330neo aircraft in ...</div>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>{/* .posts-list */}
                                        </div>{/* .atbs-block__inner */}
                                    </div>{/* .atbs-block */}
                                </div>
                                <div className="atbs-sub-col atbs-sub-col--right js-sticky-sidebar" role="complementary">
                                    <div id="search-2" className="widget widget_search">
                                        <form action="https://atom.bk-ninja.com/technology/" className="search-form" method="get">
                                            <input type="text" name="s" className="search-form__input" placeholder="Search" />
                                            <button type="submit" className="search-form__submit"><i className="mdicon mdicon-search" /></button>
                                        </form>
                                    </div>
                                    <div id="bk_widget_posts_list-2" className="widget atbs-widget">
                                        <div className="atbs-widget atbs-widget-posts-4">
                                            <div className="widget__title widget__title--style-1">
                                                <h4 className="widget__title-text">Posts List</h4>
                                            </div>
                                            <div className="widget__inner">
                                                <ul className="posts-list widget-posts-list-style-1 list-space-md list-seperated list-unstyled">
                                                    {
                                                        data.map((curValue) => {
                                                            return (

                                                                <li className="list-item" key={curValue.ID}>
                                                                    <article className="post post--no-thumb post-no-thumb" data-dark-mode="true">
                                                                        <div className="post__text">
                                                                            <div className="post__meta post-time-cat-wrap">
                                                                                <a className="cat-6 post__cat cat-theme" href="https://atom.bk-ninja.com/technology/category/laptop/tips/">Tips</a>
                                                                                <span className="time-wrap"><time className="time published" dateTime="2019-10-29T10:46:00+00:00" title="October 29, 2019 at 10:46 am">October 29,
                                                                                    2019</time></span>
                                                                            </div>
                                                                            <div className="post__text--wrap">
                                                                                <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                                                                    <a href="">{curValue.PostTitle}</a>
                                                                                </h3>
                                                                                <div className="post__readmore button-readmore-no-text"><a href="" className="button__readmore"><span className="readmore__text"><i className="mdicon mdicon-navigate_next" /></span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                </li>

                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>{/* End Widget Module*/}
                                    </div>
                                    <div id="bk_widget_review_list-2" className="widget atbs-widget">
                                        <div className="atbs-widget-reviews-list">
                                            <div className="widget__title widget__title--style-1">
                                                <h4 className="widget__title-text">Review Post</h4>
                                            </div>
                                            <div className="widget__inner">
                                                <ul className="posts-list widget-posts-list-style-1 list-space-md list-unstyled">
                                                    <li className="list-item">
                                                        <article className="post post--horizontal post--horizontal post--horizontal-xxs post--horizontal-score-star" data-dark-mode="true">
                                                            <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                                                <a href="https://atom.bk-ninja.com/technology/tomorrow-is-often-the-busiest-day-of-the-week/"><img width={180} height={180} src="assets/img/32-180x180.jpg" className="attachment-atbs-xxs-1_1 size-atbs-xxs-1_1 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-180x180.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-150x150.jpg 150w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-400x400.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-600x600.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-800x800.jpg 800w" sizes="(max-width: 180px) 100vw, 180px" /></a>
                                                                {/* close a tag */}
                                                            </div>
                                                            <div className="post__text">
                                                                <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                                                    <a href="https://atom.bk-ninja.com/technology/tomorrow-is-often-the-busiest-day-of-the-week/">Tomorrow
                                                                        is Often the Busiest Day of the Week</a>
                                                                </h3>
                                                                <div className="post-score-star">
                                                                    <span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star_half" />
                                                                </div>{/* .post-score-star */}
                                                            </div>
                                                        </article>
                                                    </li>{/* .list-item */}
                                                    <li className="list-item">
                                                        <article className="post post--horizontal post--horizontal post--horizontal-xxs post--horizontal-score-star" data-dark-mode="true">
                                                            <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                                                <a href="https://atom.bk-ninja.com/technology/ukraine%e2%80%8a-%e2%80%8aa-brief-guide-to-travelling-in-the-country/"><img width={180} height={180} src="assets/img/13-180x180.jpg" className="attachment-atbs-xxs-1_1 size-atbs-xxs-1_1 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-180x180.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-150x150.jpg 150w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-400x400.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-600x600.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-800x800.jpg 800w" sizes="(max-width: 180px) 100vw, 180px" /></a>
                                                                {/* close a tag */}
                                                            </div>
                                                            <div className="post__text">
                                                                <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                                                    <a href="https://atom.bk-ninja.com/technology/ukraine%e2%80%8a-%e2%80%8aa-brief-guide-to-travelling-in-the-country/">How
                                                                        To Love Yourself, Even When No One Else Seems To</a>
                                                                </h3>
                                                                <div className="post-score-star">
                                                                    <span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star_half" />
                                                                </div>{/* .post-score-star */}
                                                            </div>
                                                        </article>
                                                    </li>{/* .list-item */}
                                                </ul>
                                            </div>
                                        </div>{/* End Widget Module*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }

            <Helmet>
                {/* <script type="text/javascript" src="./assest/js/home-owl-script.js" id="atbs-scripts-js"></script> */}
            </Helmet>

        </>
    );

}

export default Home;
