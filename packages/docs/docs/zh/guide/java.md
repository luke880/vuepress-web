# 后端


## 1、BaseService作用
Service接口类继承BaseService接口，可默认实现分页列表、保存、更新、删除、详情等接口，支持自定义重写；controller直接调用即可

### 代码示例：
+ entity类需要继承BaseEntity

```java
@TableName(keepGlobalPrefix = true, value = "sys_report_data_source")
@Data
public class DataSource extends BaseEntity {

}
```

+ service接口类继承BaseService

```java
public interface DataSourceService extends BaseService<DataSource> {

    @Autowired
    private DataSourceMapper dataSourceMapper;
    
    @Override
    public BaseMapper<DataSource> getMapper() {
        return dataSourceMapper;
    }
}
```

+ BaseService类接口内容：

```java
public interface BaseService<T extends BaseEntity> {
    /**
     * 需要实现，定义Mapper
     *
     * @return
     */
    BaseMapper<T> getMapper();

    /**
     * 分页查询
     *
     * @param pagination 分页对象
     * @param wrapper    条件,排序自定义
     * @return
     */
    default Pagination pageList(Pagination pagination, Wrapper wrapper) {
        Page prepare = pagination.prepare();
        List list = this.getMapper().selectList(wrapper);
        pagination.setList(list, prepare);
        return pagination;
    }

    /**
     * 查询列表数据不分页
     *
     * @param wrapper 条件,排序自定义
     * @return
     */
    default List<T> List(Wrapper wrapper) {
        List list = this.getMapper().selectList(wrapper);
        return list;
    }

    /**
     * 保存
     *
     * @param entity
     * @return
     */
    @Transactional
    default int save(T entity) {
        return this.getMapper().insert(entity);
    }

    /**
     * 更新
     *
     * @param entity
     * @return
     */
    @Transactional
    default int update(T entity) {
        return this.getMapper().updateById(entity);
    }

    /**
     * 详情 通过主键查询一条记录
     *
     * @param id
     * @return
     */
    default T detail(Serializable id) {
        return this.getMapper().selectById(id);
    }

    /**
     * 通过条件查询一条记录
     *
     * @param wrapper
     * @return
     */
    default T selectOne(Wrapper<T> wrapper) {
        return (T) this.getMapper().selectOne(wrapper);
    }

    /**
     * 删除
     *
     * @param id 主键
     * @return
     */
    @Transactional
    default int delete(Serializable id) {
        return this.getMapper().deleteById(id);
    }

    /**
     * 批量删除
     *
     * @param ids 需要删除的编号集合
     * @return
     */
    @Transactional
    default int deleteBatch(List ids) {
        return this.getMapper().deleteBatchIds(ids);
    }
}


``` 
## 2、流程事件



![佛祖保佑  永无BUG](https://pic.rmb.bdstatic.com/c51a5f2f5c1adfaabe43cdf4a4ef68e8.png)
