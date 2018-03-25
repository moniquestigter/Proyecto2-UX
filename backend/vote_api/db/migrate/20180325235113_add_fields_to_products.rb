class AddFieldsToProducts < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :url, :string
    add_column :products, :submitterAvatarUrl, :string
    add_column :products, :productImageUrl, :string
  end
end
