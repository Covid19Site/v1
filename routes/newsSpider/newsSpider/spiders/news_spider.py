import scrapy
from html_text import extract_text

class NewsSpider(scrapy.Spider):
    name = "news"
    start_urls = [
        'https://www.coronavirustoday.com/coronavirus-breaking-news'
    ]
    def parse(self, response):
        i = 0
        for quote in response.css('div div.view-content div.views-row'):
            if i == 50: break
            i += 1
            if not quote.css('div.views-field-created span::text').get(): continue
            content = self.content_helper(quote.css('div.views-field-body div p'))
            yield {
                'date_time': quote.css('div.views-field-created span::text').get(),
                'title': quote.css('div.views-field-title h2::text').get(),
                'content': content
            }
            
    def content_helper(self, response):
        res = ""
        for ele in response:
            html = ele.get()
            res += extract_text(html)
        return res

    # [scrapy crawl quotes -o quotes.json] to export output data