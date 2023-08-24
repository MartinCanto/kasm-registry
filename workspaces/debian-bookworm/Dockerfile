FROM kasmweb/core-debian-bookworm:1.14.0
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
RUN wget https://wdl1.pcfg.cache.wpscdn.com/wpsdl/wpsoffice/download/linux/11704/wps-office_11.1.0.11704.XA_amd64.deb -O wps-office.deb
RUN dpkg -i wps-office.deb
RUN  rm -rf wps-office.deb

# Install Spotify
RUN su -c 'echo "APT::Get::Update::SourceListWarnings::NonFreeFirmware \"false\";" > /etc/apt/apt.conf.d/no-bookworm-firmware.conf'
RUN echo deb http://repository.spotify.com stable non-free | sudo tee /etc/apt/sources.list.d/spotify.list
RUN curl -sS https://download.spotify.com/debian/pubkey_7A3A762FAFD4A51F.gpg | gpg --dearmor --yes -o /etc/apt/trusted.gpg.d/spotify.gpg
RUN apt update
RUN apt-get install -y spotify-client

#Install Apps
#RUN apt-get install -y jfractionlab stellarium wordnet kstars kgeography gperiodic geogebra easychem lightspeed grace scratch minuet openuniverse kalzium
RUN apt-get install -y evolution gimp gnome-calendar rednotebook zim gpodder darktable
RUN apt remove -y xfburn

#Install Rambox
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