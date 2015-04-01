This is a repository with code related to my blog about RethinkDB vs SQL on Airpair.

In order to run this example code you will need Vagrant installed on your host machine.

##### Set-up

```bash
vagrant up
```

To fire up the two vms:

```bash
vagrant ssh s1
```

```bash
vagrant ssh s2
```

On `s1`:

```bash
rethinkdb --bind all
```

On `s2`

```bash
rethinkdb --join 192.168.33.11:29015 --bind all
```

On either box:

```bash
cd /vagrant
npm install
node data/rethinkdb.js
```