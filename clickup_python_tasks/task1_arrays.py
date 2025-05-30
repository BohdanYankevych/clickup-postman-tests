data = [4, 4, 8, 3, 3, 3, 2, 4, 4]

print("Усі елементи масиву:")
for num in data:
    print(num)

print("\n Перші 3 елементи:")
print(data[:3])

print("\n Сума всіх елементів:")
print(sum(data))

print("\n Сума всіх елементів, крім тих що дорівнюють 4:")
filtered_sum = sum(x for x in data if x != 4)
print(filtered_sum)