// 模拟数据
const featuredContent = [
    {
        title: "最新大片：流浪地球3",
        image: "assets/movie1.jpg",
        description: "科幻史诗大作即将上映..."
    },
    {
        title: "新剧《三体》热播中",
        image: "assets/tv1.jpg",
        description: "改编自刘慈欣同名小说的科幻剧集..."
    }
    // 更多数据...
];

const latestNews = [
    {
        title: "好莱坞年度大片盘点",
        date: "2024-01-20",
        summary: "2024年最值得期待的电影..."
    },
    {
        title: "国产科幻电影崛起",
        date: "2024-01-18",
        summary: "中国科幻电影市场迎来新机遇..."
    },
    {
        title: "著名导演新作筹备中",
        date: "2024-01-15",
        summary: "知名导演透露新电影计划..."
    }
    // 更多数据...
];

const popularMovies = [
    {
        title: "流浪地球2",
        rating: "9.2",
        image: "assets/movie2.jpg"
    },
    {
        title: "满江红",
        rating: "8.7",
        image: "assets/movie3.jpg"
    },
    {
        title: "独行月球",
        rating: "8.5",
        image: "assets/movie4.jpg"
    },
    {
        title: "长空之王",
        rating: "8.9",
        image: "assets/movie5.jpg"
    }
    // 更多数据...
];

// 使用 jQuery 加载特色内容
function loadFeaturedContent() {
    $.each(featuredContent, function(index, item) {
        $('.featured-content').append(`
            <article class="card">
                <img src="${item.image}" alt="${item.title}">
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </article>
        `);
    });
}

// 使用 jQuery 加载最新资讯
function loadLatestNews() {
    $.each(latestNews, function(index, news) {
        $('.news-grid').append(`
            <article class="card">
                <div class="card-content">
                    <h3>${news.title}</h3>
                    <p class="date">${news.date}</p>
                    <p>${news.summary}</p>
                </div>
            </article>
        `);
    });
}

// 使用 jQuery 加载热门影视
function loadPopularMovies() {
    $.each(popularMovies, function(index, movie) {
        $('.movie-grid').append(`
            <article class="card">
                <img src="${movie.image}" alt="${movie.title}">
                <div class="card-content">
                    <h3>${movie.title}</h3>
                    <div class="rating">评分：${movie.rating}</div>
                </div>
            </article>
        `);
    });
}

// 使用 jQuery 的文档就绪函数
$(document).ready(function() {
    loadFeaturedContent();
    loadLatestNews();
    loadPopularMovies();
    
    // 添加简单的导航栏响应式切换
    $('.logo').click(function() {
        $('.nav-links').slideToggle(300);
    });
    
    // 添加平滑滚动效果
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    // 新增电影详情加载
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = parseInt(urlParams.get('id'));
    if(movieId) loadMovieDetail(movieId);
});

const movieDetails = [
    {
        id: 1,
        title: '流浪地球3',
        director: '郭帆',
        actors: ['吴京', '刘德华', '李雪健'],
        duration: '168分钟',
        releaseDate: '2026-02-01',
        rating: '9.5',
        plot: '人类继续执行流浪地球计划...',
        trailer: '//example.com/trailer'
    }
];

function loadMovieDetail(movieId) {
    const movie = movieDetails.find(m => m.id === movieId);
    if(movie) {
        $('#movie-detail-container').html(`
            <div class="news-detail-header">
                <h1>${movie.title}</h1>
                <div class="news-detail-meta">
                    <span>导演：${movie.director}</span>
                    <span>片长：${movie.duration}</span>
                    <span>上映日期：${movie.releaseDate}</span>
                </div>
            </div>
            <div class="cast-list">
                ${movie.actors.map(actor => `
                    <div class="cast-item">
                        <img src="assets/${actor}.jpg" alt="${actor}">
                        <h4>${actor}</h4>
                    </div>`).join('')}
            </div>
        `);
    }
}

const tvShowDetails = [
    {
        id: 1,
        title: '三体',
        director: '杨磊',
        seasons: '第一季',
        episodes: 30,
        actors: ['张鲁一', '于和伟', '陈瑾'],
        rating: '9.3',
        plot: '面对外星文明入侵的人类文明存亡之战...',
        episodesList: [
            { title: '第1集 科学边界', duration: '45分钟' },
            { title: '第2集 台球', duration: '45分钟' }
        ]
    }
];

function loadTvShowDetail(tvId) {
    const tvShow = tvShowDetails.find(t => t.id === tvId);
    if(tvShow) {
        $('#tvshow-detail-container').html(`
            <div class="news-detail-header">
                <h1>${tvShow.title}</h1>
                <div class="news-detail-meta">
                    <span>导演：${tvShow.director}</span>
                    <span>季数：${tvShow.seasons}</span>
                    <span>集数：${tvShow.episodes}</span>
                </div>
            </div>
            <div class="cast-list">
                ${tvShow.actors.map(actor => `
                    <div class="cast-item">
                        <img src="assets/${actor}.jpg" alt="${actor}">
                        <h4>${actor}</h4>
                    </div>`).join('')}
            </div>
            <div class="episode-list">
                ${tvShow.episodesList.map(ep => `
                    <div class="episode-item">
                        <h4>${ep.title}</h4>
                        <span>${ep.duration}</span>
                    </div>`).join('')}
            </div>
        `);
    }
}
$(document).ready(function() {
    // 新增电视剧详情加载
    const tvParams = new URLSearchParams(window.location.search);
    const tvId = parseInt(tvParams.get('id'));
    if(tvId) loadTvShowDetail(tvId);
});