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

#install xfce-desktop
RUN DEBIAN_FRONTEND='noninteractive' apt install task-xfce-desktop -y

#Install wps
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y ttf-mscorefonts-installer
RUN wget https://wdl1.pcfg.cache.wpscdn.com/wpsdl/wpsoffice/download/linux/11701/wps-office_11.1.0.11701.XA_amd64.deb -O wps-office.deb
RUN dpkg -i wps-office.deb
RUN  rm -rf wps-office.deb

#Install Apps
RUN apt-get install -y jfractionlab stellarium wordnet kstars kgeography gperiodic geogebra easychem lightspeed grace scratch minuet openuniverse kalzium marble

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
