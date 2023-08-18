FROM kasmweb/core-ubuntu-jammy:1.13.1
USER root

ENV HOME /home/kasm-default-profile
ENV STARTUPDIR /dockerstartup
ENV INST_SCRIPTS $STARTUPDIR/install
WORKDIR $HOME

######### Customize Container Here ###########
RUN add-apt-repository multiverse -y
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y wget curl dirmngr ca-certificates software-properties-common gnupg gnupg2
RUN apt-get install -y gnome-system-monitor
RUN apt-get install -y gnome-calculator
RUN apt-get install -y mlocate
RUN apt-get install -y sudo
RUN apt-get install -y gnome-software
RUN apt-get install -y gnome-software-plugin-snap
RUN apt-get install -y gnome-software-common
RUN apt-get install -y xdg-utils
RUN apt-get install -y fonts-lyx
RUN apt-get install -y firefox
RUN apt-get install -y evolution
RUN apt-get install -y evolution-ews
RUN apt-get install -y krita krita-data
RUN apt-get install -y krita-gmic
RUN apt-get install -y krita-l10n
RUN apt-get install -y blender
RUN apt-get install -y blender-data
RUN apt-get install -y shotcut shotcut-data

RUN DEBIAN_FRONTEND=noninteractive apt-get install -y ttf-mscorefonts-installer

RUN wget https://wdl1.pcfg.cache.wpscdn.com/wpsdl/wpsoffice/download/linux/11701/wps-office_11.1.0.11701.XA_amd64.deb -O wps-office.deb
RUN dpkg -i wps-office.deb
RUN  rm -rf wps-office.deb

RUN wget "https://rambox.app/api/download?os=linux&package=deb" -O rambox.deb
RUN apt-get install -y gconf-service gconf-service-backend gconf2 gconf2-common libappindicator1 libgconf-2-4 libindicator7
RUN dpkg -i rambox.deb
RUN rm -rf rambox.deb

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