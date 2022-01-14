# [22,27,16,2,18,6] -> *Insertion Sort.* 
## 1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
``` 
[22,27|16,2,18,6]
[16,22,27|2,18,6]
[2,16,22,27|18,6]
[2,16,18,22,27|6]
[2,6,16,18,22,27]
```
## 2.Big-O gösterimini yazınız.
```
O(n^2)
```
## 3.Time Complexity:
### Best case : Doğru Sıralı Dizi ise, n tane sayının üzerinden birer defa geçer karşılaştırır => n*1=n  O(n)
### Worst case : Ters Sıralı Dizi ise, karşılaştırır ve yer değiştirir n*n=n^2 => O(n^2)
### Avarage case : Worst case ile Best case'in ortalamasını aldığımızda => O(n^2)
--- 
## 4.Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.
### Avarage Case kapsamına girer.
---
## 5.[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.
```
[3,7|5,8,2,9,4,15,6]
[3,5,7|8,2,9,4,15,6]
[3,5,7,8|2,9,4,15,6]
[2,3,5,7,8|9,4,15,6]
```
