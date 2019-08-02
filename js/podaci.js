const podaci = [
  {
    id: 0, 
    naziv: "Acer A315", 
    cpu: "Intel® Celeron® Dual Core N3060 Processor, Brzina: 1.6GHz (Burst do 2.48Ghz), Keš memorija: 2MB",
    ram: "4GB DDR3, 2 memorijska slota, maksimalno 8GB",
    hdd: "500GB 5400 rpm, SATA, 2.5 inča HDD",
    mala_slika: "acera315m.jpg", 
    velika_slika: "acera315v.jpg",
    cena: 26990
  },
  {
    id: 1, 
    naziv: "Acer Aspire 3", 
    cpu: "Intel® Celeron® Dual Core N3060 Processor, Brzina: 1.6GHz (Burst do 2.48Ghz), Keš memorija: 2MB",
    ram: "4GB DDR3, 1 memorijski slot, maksimalno 4GB",
    hdd: "128GB SATA SSD",
    mala_slika: "acer-aspire-3m.jpg", 
    velika_slika: "acer-aspire-3v.jpg",
    cena: 28990
  },
  {
    id: 2, 
    naziv: "Asus VivoBook Pro 17", 
    cpu: "Intel® Core™ i7-8565U Quad Core Processor, Brzina: 1.8 GHz (Burst do 4.6GHz), Keš memorija: 8MB",
    ram: "4GB DDR4+8GB DDR4, 2 memorijska slota, maksimalno 16 GB",
    hdd: "1TB 5400 rpm, SATA, 2.5 inča HDD, 512GB M.2 SSD",
    mala_slika: "asus-vivobook-pro-17m.jpg", 
    velika_slika: "asus-vivobook-pro-17v.jpg",
    cena: 122990
  },
  {
    id: 3, 
    naziv: "Acer A315", 
    cpu: "Intel® Celeron® Dual Core N3060 Processor, Brzina: 1.6GHz (Burst do 2.48Ghz), Keš memorija: 2MB",
    ram: "4GB DDR3, 2 memorijska slota, maksimalno 8GB",
    hdd: "500GB 5400 rpm, SATA, 2.5 inča HDD",
    mala_slika: "acera315m.jpg", 
    velika_slika: "acera315v.jpg",
    cena: 26990
  },
  {
    id: 4, 
    naziv: "Asus E406MA-BV212TS", 
    cpu: "Intel® Celeron® N4000 Dual Core Processor, Brzina: 1.1GHz (Burst do 2.6GHz), Keš memorija: 4MB",
    ram: "4GB DDR4, 1 memorijski slot, maksimalno 4GB",
    hdd: "64G EMMC",
    mala_slika: "acera315m.jpg", 
    velika_slika: "acera315v.jpg",
    cena: 27990
  },
  {
    id: 5, 
    naziv: "Asus ROG Strix G", 
    cpu: "Intel® Core™ i7-9750H Hexa Core Processor, Brzina: 2.60GHz (Burst do 4.5GHz), Keš memorija: 12MB",
    ram: "16GB DDR4, 2 memorijski slot, maksimalno 32GB",
    hdd: "256GB SSD M.2",
    mala_slika: "asus-rog-strix-gm.jpg", 
    velika_slika: "asus-rog-strix-gv.jpg",
    cena: 189990
  },
  {
    id: 6, 
    naziv: "Asus ROG Strix Scar II", 
    cpu: "Intel® Core™ i7-8750H Hexa Core Processor, Brzina: 2.20 GHz (Burst do 3.9GHz), Keš memorija: 9MB",
    ram: "16GB DDR4, 2 memorijska slota, maksimalno 32GB",
    hdd: "1TB 5400 rpm, SATA, 2.5 Hybrid HDD (FireCuda), 256GB M.2 SSD PCIE NVME",
    mala_slika: "asus-rog-strix-glm.jpg", 
    velika_slika: "asus-rog-strix-glv.jpg",
    cena: 209990
  },
  {
    id: 7, 
    naziv: "Acer A315", 
    cpu: "Intel® Celeron® Dual Core N3060 Processor, Brzina: 1.6GHz (Burst do 2.48Ghz), Keš memorija: 2MB",
    ram: "4GB DDR3, 2 memorijska slota, maksimalno 8GB",
    hdd: "500GB 5400 rpm, SATA, 2.5 inča HDD",
    mala_slika: "acera315m.jpg", 
    velika_slika: "acera315v.jpg",
    cena: 26990
  },
  {
    id: 8, 
    naziv: "Lenovo 330", 
    cpu: "AMD Dual Core A6-9225 Processor, Radna brzina: 2.6GHz (Burst do 3GHz), Keš memorija: 1MB",
    ram: "4GB DDR4, 1 memorijski slot, maksimalno 8GB",
    hdd: "500GB 5400 rpm, SATA, 2.5 inča HDD",
    mala_slika: "lenovo-330m.jpg", 
    velika_slika: "lenovo-330v.jpg",
    cena: 33990
  },
  {
    id: 9, 
    naziv: "Lenovo 330-15AST", 
    cpu: "AMD Dual Core A6-9225 Processor, Radna brzina: 2.6 GHz (Burst do 3GHz), Keš memorija: 1MB",
    ram: "4GB DDR4, 1 memorijski slot, maksimalno 8GB",
    hdd: "500GB 5400 rpm, SATA, 2.5 inča HDD",
    mala_slika: "lenovo-330-15astm.jpg", 
    velika_slika: "lenovo-330-15astv.jpg",
    cena: 35490
  },
  {
    id: 10, 
    naziv: "Lenovo IdeaPad 330-15AST", 
    cpu: "AMD Dual-Core A6-9225 Processor, Radna brzina: 2.6GHz (Burst do 3GHz), Keš memorija: 1MB",
    ram: "4GB DDR4, 1 memorijski slot, maksimalno 8GB",
    hdd: "128GB SSD SATA",
    mala_slika: "lenovo-ideapad-330m.jpg", 
    velika_slika: "lenovo-ideapad-330v.jpg",
    cena: 32990
  },
  {
    id: 11, 
    naziv: "Lenovo 330-15AST", 
    cpu: "AMD Dual Core A6-9225 Processor, Radna brzina: 2.6 GHz (Burst do 3GHz), Keš memorija: 1MB",
    ram: "4GB DDR4, 1 memorijski slot, maksimalno 8GB",
    hdd: "500GB 5400 rpm, SATA, 2.5 inča HDD",
    mala_slika: "lenovo-330-15astm.jpg", 
    velika_slika: "lenovo-330-15astv.jpg",
    cena: 35490
  }
]