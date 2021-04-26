import{g as l,f as n,j as s,l as e}from"./common-d6bd45c0.js";import a from"./p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f54065a9eeac470684b2e32d5a94abf3~tplv-k3u1fbpfcp-zoom-1.image";import t from"./p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d450e7717a6341428439d08ac098ffa1~tplv-k3u1fbpfcp-zoom-1.image";import o from"./p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09258daaf89b49e4bb01f646cb4d3b0b~tplv-k3u1fbpfcp-zoom-1.image";const p='{"title":"在阿里云服务器中安装MySQL数据库并远程连接","frontmatter":{"date":"2021-04-26","title":"在阿里云服务器中安装MySQL数据库并远程连接","tags":["mysql"],"describe":"mysql在云服务器的安装"},"relativePath":"docs/alimysql.md","lastUpdated":1619415454235.6697}';var c={};const u=s("blockquote",null,[s("p",null,[e("注意：本教程中使用的阿里云服务器操作系统为"),s("code",null,"Centos 8.2")])],-1),r=s("p",null,"第一步：更新服务器系统，确保服务器系统处于最新状态（此步操作可跳过）",-1),i=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[s("span",{class:"token punctuation"},"["),e("root@localhost ~"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token comment"},"# yum -y update"),e("\n")])])],-1),m=s("p",null,[e("如果显示内容中含有 "),s("code",null,"Complete!"),e(" 说明更新成功或者已经是最新版本")],-1),d=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[e("Last metadata expiration check: "),s("span",{class:"token number"},"2"),e(":01:10 ago on Sun "),s("span",{class:"token number"},"13"),e(" Sep "),s("span",{class:"token number"},"2020"),e(" 08:28:35 PM CST.\nDependencies resolved.\nNothing to do.\nComplete"),s("span",{class:"token operator"},"!"),e("\n")])])],-1),g=s("p",null,"第二部：重启服务器（此步操作可跳过）",-1),k=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[s("span",{class:"token punctuation"},"["),e("root@localhost ~"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token comment"},"# reboot"),e("\n")])])],-1),y=s("p",null,"第三步：检查是否安装过MySQL数据库，如果安装过则先删除以前版本，以免安装不成功，下面两条命令均可查询是否安装",-1),h=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[s("span",{class:"token punctuation"},"["),e("root@localhost ~"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token comment"},"# rpm -qa|grep -i mysql"),e("\n")])])],-1),f=s("p",null,"或",-1),v=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[s("span",{class:"token punctuation"},"["),e("root@localhost ~"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token comment"},"# yum list installed | grep mysql"),e("\n")])])],-1),b=s("p",null,"如果安装了的话，使用下面这条命令删除原先的MySQL数据库，举例如下：",-1),q=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[s("span",{class:"token function"},"rpm"),e(" -e  --nodeps        mysql-libs-5.1.73-5.e16_6.i686  \n")])])],-1),S=s("p",null,"第四步：下载MySQL安装包",-1),L=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[s("span",{class:"token function"},"rpm"),e(" -ivh http://dev.mysql.com/get/mysql57-community-release-el7-8.noarch.rpm\n")])])],-1),M=s("p",null,"或",-1),Q=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[s("span",{class:"token function"},"rpm"),e(" -ivh http://dev.mysql.com/get/mysql57-community-release-el7-8.noarch.rpm\n")])])],-1),w=s("p",null,"第五步：安装MySQL数据库",-1),j=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[s("span",{class:"token punctuation"},"["),e("root@localhost ~"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token comment"},"# yum install -y mysql-server"),e("\n")])])],-1),_=s("p",null,"或",-1),C=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[s("span",{class:"token punctuation"},"["),e("root@localhost ~"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token comment"},"# yum install mysql-community-server"),e("\n")])])],-1),x=s("p",null,"如果显示以下内容说明安装成功",-1),z=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[e("Complete"),s("span",{class:"token operator"},"!"),e("\n")])])],-1),P=s("p",null,"第六步：设置开机启动MySQL",-1),D=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[e(" systemctl "),s("span",{class:"token builtin class-name"},"enable"),e(" mysqld.service\n")])])],-1),N=s("p",null,"第七步：检查是否已经开启了开机自启动",-1),T=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[e("systemctl list-unit-files "),s("span",{class:"token operator"},"|"),e(),s("span",{class:"token function"},"grep"),e(" mysqld\n")])])],-1),A=s("p",null,"如果显示以下内容则说明已经开启",-1),E=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,"mysqld.service enabled\n")])],-1),O=s("p",null,"第八步：设置开启服务",-1),R=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,"systemctl start mysqld.service\n")])],-1),U=s("p",null,"第九步：登陆MySQL",-1),W=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,"mysql -uroot -p \n")])],-1),B=s("p",null,"注意：密码为空，直接敲回车即可登陆到MySQL（笔者当时的MySQL版本为8.17）",-1),F=s("p",null,"第十步：修改当前用户密码：",-1),G=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[e("mysql"),s("span",{class:"token operator"},">"),e(" SET PASSWORD "),s("span",{class:"token operator"},"="),e(" ‘此处改为你自己的密码’"),s("span",{class:"token punctuation"},";"),e("\n")])])],-1),H=s("p",null,"第十一步：开启MySQL远程访问连接",-1),I=s("p",null,"依次输入如下命令",-1),J=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[e("mysql"),s("span",{class:"token operator"},">"),e(" use mysql\n")])])],-1),K=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[e("mysql"),s("span",{class:"token operator"},">"),e(),s("span",{class:"token keyword"},"select"),e(" host, user, authentication_string, plugin from user"),s("span",{class:"token punctuation"},";"),e("\n")])])],-1),V=s("p",null,"此时可发现user中的root的host是localhost，也是仅支持本地访问",-1),X=s("p",null,"输入如下命令，将root的权限改成可以远程连接",-1),Y=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[e("mysql"),s("span",{class:"token operator"},">"),e(" update user "),s("span",{class:"token builtin class-name"},"set"),e(),s("span",{class:"token function"},"host"),e(),s("span",{class:"token operator"},"="),e(),s("span",{class:"token string"},"'%'"),e(" where user "),s("span",{class:"token operator"},"="),e(),s("span",{class:"token string"},"'root'"),s("span",{class:"token punctuation"},";"),e("\n")])])],-1),Z=s("p",null,"然后刷新MySQL权限（此步一定要做，不然无法成功修改权限！！！）",-1),$=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[e("mysql"),s("span",{class:"token operator"},">"),e(" flush privileges"),s("span",{class:"token punctuation"},";"),e("\n")])])],-1),ll=s("p",null,"第十二步：开启远程连接后还需要添加阿里云服务器安全组规则",-1),nl=s("p",null,[s("img",{src:a,alt:""})],-1),sl=s("p",null,"完成这些之后你就可以在本地远程连接到阿里云服务器的MySQL数据库了，这里使用Navicat进行演示",-1),el=s("p",null,[s("img",{src:t,alt:""})],-1),al=s("p",null,"连接成功",-1),tl=s("p",null,[s("img",{src:o,alt:""})],-1),ol=s("blockquote",null,[s("p",null,"本文参考博客地址"),s("p",null,[s("a",{href:"https://www.cnblogs.com/weifeng1463/p/7941625.html",target:"_blank",rel:"noopener noreferrer"},"https://www.cnblogs.com/weifeng1463/p/7941625.html")]),s("p",null,[s("a",{href:"https://blog.csdn.net/qq_40241957/article/details/90343651",target:"_blank",rel:"noopener noreferrer"},"https://blog.csdn.net/qq_40241957/article/details/90343651")]),s("p",null,"感谢！")],-1);c.render=function(s,e,a,t,o,p){return n(),l("div",null,[u,r,i,m,d,g,k,y,h,f,v,b,q,S,L,M,Q,w,j,_,C,x,z,P,D,N,T,A,E,O,R,U,W,B,F,G,H,I,J,K,V,X,Y,Z,$,ll,nl,sl,el,al,tl,ol])};export default c;export{p as __pageData};
