import * as React from 'react';
import { Link } from 'react-router-dom';


function Category(props) {

    var catePosts = props.userList;
    console.log(catePosts);

    return (
        <>

            <div id="site-content" className="site-content">
                <div className="container atbs-block-custom-margin"><div className="block-heading page-heading block-heading--style-1"><h2 className="page-heading__title block-heading__title">Laptop</h2></div>{/* block-heading */}</div>{/* container */}    {/* listing has sidebar */}
                <div className="atbs-block atbs-block--fullwidth">
                    <div className="container ">
                        <div className="row">                <div className="atbs-main-col " role="main">
                            <div id="atbs_block_listing_list_3_has_sidebar-623810b6cd8a7" className="atbs-block">
                                <div className="atbs-post--listing-list-large atbs-post--listing-list-3"><div className="posts-list list-space-xxl">
                                    {
                                        catePosts.map((curValue, index) => {
                                            return (
                                                <div className="list-item" key={index}>
                                                    <article className="post post--vertical list-large-post--vertical-large list-large-post--vertical-large-has-sidebar disable-thumb-placeholder" data-dark-mode="true">
                                                        <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                                            <a href="https://atom.bk-ninja.com/technology/family-owned-florist-business-looks-to-bloom-in-chestertown/"><img width={1200} height={600} src={curValue.PostThumbUrl} className="attachment-atbs-l-2_1 size-atbs-l-2_1 wp-post-image" alt="" sizes="(max-width: 1200px) 100vw, 1200px" /></a> {/* close a tag */}                                          </div>
                                                        <div className="post__text">
                                                            <div className="post__meta post-time-cat-wrap">
                                                                <a className="cat-6 post__cat post__cat--bg cat-theme-bg" href="https://atom.bk-ninja.com/technology/category/laptop/tips/">Tips</a>                            <span className="time-wrap"><time className="time published" dateTime="2019-10-29T10:46:00+00:00" title="October 29, 2019 at 10:46 am">October 29, 2019</time></span>                      </div>
                                                            <div className="post__text--wrap ">
                                                                <h3 className="post__title ">
                                                                    <Link to={`/news/${curValue.PostSlug}`}>{curValue.PostTitle}</Link>                      </h3>
                                                                <div className="post__excerpt ">
                                                                    <div className="excerpt">Set to launch on the manufacturers new A330neo aircraft in 2017, its offering lots of ...</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                </div>
                                {/* <div className="atbs-pagination"><h4 className="atbs-pagination__title sr-only">Posts navigation</h4><div className="atbs-pagination__links text-right"><span className="atbs-pagination__item atbs-pagination__item-current">1</span><a href="http://localhost:3000/category/laptop/page/2" className="atbs-pagination__item" title={2}>2</a><a href="https://atom.bk-ninja.com/technology/category/laptop/page/2/"><span className="atbs-pagination__item atbs-pagination__item-next"><i className="mdicon mdicon-arrow_forward" /></span></a></div></div> */}

                                <div className='main-div mt-5'>
                                <div className="clearfix"></div>
                                    {props.totalPages !== props.pageNum && <Link to={`/category/videos/page/${props.pageNum + 1}`} className="text-white bg-danger load-btn" onClick={() => props.getPagenum()}>{props.error ? 'Reached' : 'Load More'}{props.loading ? <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true" /> : ''}</Link>}
                                </div>


                            </div>

                            {/* .atbs-block */}
                        </div>{/* .atbs-main-col */}
                            <div className="atbs-sub-col atbs-sub-col--right sidebar js-sticky-sidebar" role="complementary">
                                <div id="search-2" className="widget widget_search"><form action="https://atom.bk-ninja.com/technology/" className="search-form" method="get">
                                    <input type="text" name="s" className="search-form__input" placeholder="Search" />
                                    <button type="submit" className="search-form__submit"><i className="mdicon mdicon-search" /></button>
                                </form></div><div id="bk_widget_posts_list-2" className="widget atbs-widget"><div className="atbs-widget atbs-widget-posts-4"><div className="widget__title widget__title--style-1"><h4 className="widget__title-text">Posts List</h4></div><div className="widget__inner"><ul className="posts-list widget-posts-list-style-1 list-space-md list-seperated list-unstyled"><li className="list-item">            <article className="post post--no-thumb post-no-thumb" data-dark-mode="true">
                                    <div className="post__text">
                                        <div className="post__meta post-time-cat-wrap">
                                            <a className="cat-6 post__cat cat-theme" href="https://atom.bk-ninja.com/technology/category/laptop/tips/">Tips</a>                            <span className="time-wrap"><time className="time published" dateTime="2019-10-29T10:46:00+00:00" title="October 29, 2019 at 10:46 am">October 29, 2019</time></span>                      </div>
                                        <div className="post__text--wrap">
                                            <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                                <a href="https://atom.bk-ninja.com/technology/family-owned-florist-business-looks-to-bloom-in-chestertown/">Family-owned florist business looks to bloom in Chestertown</a>                      </h3>
                                            <div className="post__readmore button-readmore-no-text"><a href="https://atom.bk-ninja.com/technology/family-owned-florist-business-looks-to-bloom-in-chestertown/" className="button__readmore"><span className="readmore__text"><i className="mdicon mdicon-navigate_next" /></span></a></div>                  </div>
                                    </div>
                                </article>
                                </li><li className="list-item">            <article className="post post--no-thumb post-no-thumb" data-dark-mode="true">
                                    <div className="post__text">
                                        <div className="post__meta post-time-cat-wrap">
                                            <a className="cat-6 post__cat cat-theme" href="https://atom.bk-ninja.com/technology/category/laptop/tips/">Tips</a>                            <span className="time-wrap"><time className="time published" dateTime="2019-10-29T10:44:01+00:00" title="October 29, 2019 at 10:44 am">October 29, 2019</time></span>                      </div>
                                        <div className="post__text--wrap">
                                            <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                                <a href="https://atom.bk-ninja.com/technology/understanding-your-dog-for-dummies-cheatsheet/">Understanding your dog for dummies cheatsheet</a>                      </h3>
                                            <div className="post__readmore button-readmore-no-text"><a href="https://atom.bk-ninja.com/technology/understanding-your-dog-for-dummies-cheatsheet/" className="button__readmore"><span className="readmore__text"><i className="mdicon mdicon-navigate_next" /></span></a></div>                  </div>
                                    </div>
                                </article>
                                    </li><li className="list-item">            <article className="post post--no-thumb post-no-thumb" data-dark-mode="true">
                                        <div className="post__text">
                                            <div className="post__meta post-time-cat-wrap">
                                                <a className="cat-2 post__cat cat-theme" href="https://atom.bk-ninja.com/technology/category/news/">News</a>                            <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:42:46+00:00" title="October 18, 2019 at 8:42 am">October 18, 2019</time></span>                      </div>
                                            <div className="post__text--wrap">
                                                <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                                    <a href="https://atom.bk-ninja.com/technology/difficult-roads-often-lead-to-beautiful-destinations/">Joy is a Net of Love by Which You Can Catch Souls</a>                      </h3>
                                                <div className="post__readmore button-readmore-no-text"><a href="https://atom.bk-ninja.com/technology/difficult-roads-often-lead-to-beautiful-destinations/" className="button__readmore"><span className="readmore__text"><i className="mdicon mdicon-navigate_next" /></span></a></div>                  </div>
                                        </div>
                                    </article>
                                    </li><li className="list-item">            <article className="post post--no-thumb post-no-thumb" data-dark-mode="true">
                                        <div className="post__text">
                                            <div className="post__meta post-time-cat-wrap">
                                                <a className="cat-4 post__cat cat-theme" href="https://atom.bk-ninja.com/technology/category/laptop/">Laptop</a>                            <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:41:13+00:00" title="October 18, 2019 at 8:41 am">October 18, 2019</time></span>                      </div>
                                            <div className="post__text--wrap">
                                                <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                                    <a href="https://atom.bk-ninja.com/technology/choosing-my-own-adventure/">Every Next Level of Your Life Will Demand a Different You</a>                      </h3>
                                                <div className="post__readmore button-readmore-no-text"><a href="https://atom.bk-ninja.com/technology/choosing-my-own-adventure/" className="button__readmore"><span className="readmore__text"><i className="mdicon mdicon-navigate_next" /></span></a></div>                  </div>
                                        </div>
                                    </article>
                                    </li></ul></div>  </div>{/* End Widget Module*/}</div><div id="bk_widget_review_list-2" className="widget atbs-widget"><div className="atbs-widget-reviews-list"><div className="widget__title widget__title--style-1"><h4 className="widget__title-text">Review Post</h4></div><div className="widget__inner"><ul className="posts-list widget-posts-list-style-1 list-space-md list-unstyled"><li className="list-item">            <article className="post post--horizontal post--horizontal post--horizontal-xxs post--horizontal-score-star" data-dark-mode="true">
                                        <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                            <a href="https://atom.bk-ninja.com/technology/tomorrow-is-often-the-busiest-day-of-the-week/"><img width={180} height={180} src="assets/img/32-180x180.jpg" className="attachment-atbs-xxs-1_1 size-atbs-xxs-1_1 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-180x180.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-150x150.jpg 150w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-400x400.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-600x600.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-800x800.jpg 800w" sizes="(max-width: 180px) 100vw, 180px" /></a> {/* close a tag */}                                          </div>
                                        <div className="post__text">
                                            <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                                <a href="https://atom.bk-ninja.com/technology/tomorrow-is-often-the-busiest-day-of-the-week/">Tomorrow is Often the Busiest Day of the Week</a>                  </h3>
                                            <div className="post-score-star">
                                                <span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star_half" />                      </div>{/* .post-score-star */}
                                        </div>
                                    </article>
                                    </li>{/* .list-item */}<li className="list-item">            <article className="post post--horizontal post--horizontal post--horizontal-xxs post--horizontal-score-star" data-dark-mode="true">
                                        <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                            <a href="https://atom.bk-ninja.com/technology/ukraine%e2%80%8a-%e2%80%8aa-brief-guide-to-travelling-in-the-country/"><img width={180} height={180} src="assets/img/13-180x180.jpg" className="attachment-atbs-xxs-1_1 size-atbs-xxs-1_1 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-180x180.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-150x150.jpg 150w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-400x400.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-600x600.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-800x800.jpg 800w" sizes="(max-width: 180px) 100vw, 180px" /></a> {/* close a tag */}                                          </div>
                                        <div className="post__text">
                                            <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                                <a href="https://atom.bk-ninja.com/technology/ukraine%e2%80%8a-%e2%80%8aa-brief-guide-to-travelling-in-the-country/">How To Love Yourself, Even When No One Else Seems To</a>                  </h3>
                                            <div className="post-score-star">
                                                <span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star_half" />                      </div>{/* .post-score-star */}
                                        </div>
                                    </article>
                                        </li>{/* .list-item */}</ul></div>  </div>{/* End Widget Module*/}</div>                  </div> {/* .atbs-sub-col */}
                        </div>{/* .row */}      </div>{/* .container */}
                </div>{/* .atbs-block */}
                {/* listing no sidebar */}
            </div>
        </>
    )
}

export default Category