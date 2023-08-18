FROM kasmweb/core-debian-bullseye:1.14.0
USER root

ENV HOME /home/kasm-default-profile
ENV STARTUPDIR /dockerstartup
ENV INST_SCRIPTS $STARTUPDIR/install
WORKDIR $HOME

######### Customize Container Here ###########
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install sudo -y

RUN echo "kasm-user  ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers
RUN apt autoremove -y
RUN apt clean all
######### End Customizations ###########

RUN chown 1000:0 $HOME
RUN $STARTUPDIR/set_user_permission.sh $HOME

ENV HOME /home/kasm-user
WORKDIR $HOME
RUN mkdir -p $HOME && chown -R 1000:0 $HOME

USER 1000
