import eel
import jieba
import jieba.analyse



@eel.expose
def word(nodes):
    text = ''

    for node in nodes:
        text+= node['text']

    jieba.analyse.set_stop_words("stop_words.txt")
    # print('关键词提取的结果如下：')
    tags = jieba.analyse.extract_tags(text, topK=20,withWeight=True)
    #tags = jieba.analyse.textrank(text, topK=20, withWeight=True)
    for i in tags:
        print(i[0],i[1])
    eel.deal(tags)
    eel.run()

@eel.expose
def user(nodes):
    num={}
    relationship = {}
    for node in nodes:
        if node['uid'] in num.keys():
            num[node['uid']] += len(node['text'])
        else:
            num[node['uid']] = len(node['text'])
        if node['uid'] not in relationship.keys():
            relationship[node['uid']] = node['name']
    sorted_num = sorted(num.items(), key=lambda num: num[1], reverse=True)
    important_user = []
    important_id = []
    rela = {}
    for i in range(10):
        important_user.append(sorted_num[i])
        important_id.append(sorted_num[i][0])
    for k in relationship.keys():
        if k in important_id:
            rela[k] = relationship[k]
    eel.deal_u(important_user,rela)
    eel.run_u()

if __name__ == '__main__':

    eel.init("SIS")
    eel.start("streamgraph.html")
