Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.box_check_update = true

  config.vm.define "s1" do |s1|
    s1.vm.box = "ubuntu/trusty64"
    s1.vm.hostname = "thorium"

    s1.vm.provision "shell", path: "provision.sh"

    s1.vm.network "forwarded_port", guest: 8080, host: 8083
    s1.vm.network "private_network", ip: "192.168.33.11"

    s1.vm.synced_folder "./data", "/vagrant_data", type: "nfs"

    s1.vm.provider "virtualbox" do |v|
      v.memory = 1024
      v.cpus = 2
    end

    s1.vm.post_up_message = " [x] Development Environment 1 is FIRED UP!!"

    s1.ssh.forward_agent = true
  end

  config.vm.define "s2" do |s2|
    s2.vm.box = "ubuntu/trusty64"
    s2.vm.hostname = "thallium"

    s2.vm.provision "shell", path: "provision.sh"

    s2.vm.network "forwarded_port", guest: 8080, host: 8084
    s2.vm.network "private_network", ip: "192.168.33.12"

    s2.vm.synced_folder "./data", "/vagrant_data", type: "nfs"

    s2.vm.provider "virtualbox" do |v|
      v.memory = 1024
      v.cpus = 2
    end

    s2.vm.post_up_message = " [x] Development Environment 2 is FIRED UP!!"

    s2.ssh.forward_agent = true
  end

end
